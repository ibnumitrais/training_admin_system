var config = {
    userName: 'thor',
    password: 's4teliliT',
    server: 'jptrainingsql', 
    database: 'TAS_Thor',
    options: {
        rowCollectionOnRequestCompletion: true
    }
};

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES; 

module.exports = {
    getRecords: function(res) {
        var connection = new Connection(config);
        
        connection.on('connect', function(err) {
            request = new Request("SELECT * FROM dbo.Users;", function(err, rowCount, rows) {
                if (err) {
                    console.log(err);
                } else {
                    var rowsResult = new Array();
                    rows.forEach(function(columns) {
                        var row = {};
                        columns.forEach(function(column) {
                            row[column.metadata.colName] = column.value;
                        });
                        rowsResult.push(row);
                    });
                    res.end(JSON.stringify(rowsResult));
                }
            });

            connection.execSql(request);
        })
    },
    getActiveRecords: function(res) {
        var connection = new Connection(config);
        
        connection.on('connect', function(err) {
            request = new Request("SELECT * FROM dbo.Users;", function(err, rowCount, rows) {
                if (err) {
                    console.log(err);
                } else {
                    var rowsResult = new Array();
                    rows.forEach(function(columns) {
                        var row = {};
                        columns.forEach(function(column) {
                            row[column.metadata.colName] = column.value;
                        });
                        rowsResult.push(row);
                    });

                    var active = rowsResult.filter(function(item) {
                        return item.user_status === "active    ";
                    });
                
                    res.end(JSON.stringify(active));
                }
            });

            connection.execSql(request);
        })
    },
    getInactiveRecords: function(res) {
        var connection = new Connection(config);
        
        connection.on('connect', function(err) {
            request = new Request("SELECT * FROM dbo.Users;", function(err, rowCount, rows) {
                if (err) {
                    console.log(err);
                } else {
                    var rowsResult = new Array();
                    rows.forEach(function(columns) {
                        var row = {};
                        columns.forEach(function(column) {
                            row[column.metadata.colName] = column.value;
                        });
                        rowsResult.push(row);
                    });

                    var active = rowsResult.filter(function(item) {
                        return item.user_status === "not active";
                    });
                
                    res.end(JSON.stringify(active));
                }
            });

            connection.execSql(request);
        })
    }
};