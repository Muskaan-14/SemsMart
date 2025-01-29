const connectDb = () => {
    //const fs = require("fs");
    //const pg = require("pg");
    const { Client } = require('pg');




    {/*

    const config = {
        user: "avnadmin",
        password: "AVNS_sV-SRDDAIJw3xvvvV9R",
        host: "semsmart-semsmart-lst2025.g.aivencloud.com",
        port: "18199",
        database: "defaultdb",
        ssl: {
            rejectUnauthorized: true,
            ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIULPokhEz2CRNovNnp0RxFxXg+EQYwDQYJKoZIhvcNAQEM\
BQAwOjE4MDYGA1UEAwwvZDFjZDBlNjAtZTZhNS00MTBiLTkwNzgtMmI0MTQyN2Vl\
Y2VmIFByb2plY3QgQ0EwHhcNMjUwMTI3MDkyMDExWhcNMzUwMTI1MDkyMDExWjA6\
MTgwNgYDVQQDDC9kMWNkMGU2MC1lNmE1LTQxMGItOTA3OC0yYjQxNDI3ZWVjZWYg\
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAL/1Ea2i\
SNXf0eDvMK/elf62/QkNJN3H916pj5eseQKO7QvX46xZCdKGK1UNzhiFTkVbcTAi\
iBOxE6LqNJ/XahLxvEp856hNUu9F5udfIWJEMXAzSHcCdB1/gpHEH8Dnl1G+y0qd\
Iuw8xp7ShMWN75dhXkJmVw3vRc3agMqNKtLc9ifYiD/TGtLBZyMv1v6mROegyFAL\
bLiMRdemyyP8B7mdeRR+rZ82oXqyHHku1kkVnKOm+08JH443Ct2eSuOGZIEZJ+9x\
wHE6xSckbWI6C8a8oA4+5W3fi3fry/oc7s10qRHHiZf59ryQ453T9K/o+8ieainB\
eM5OsYqb3iAW23/JM0LT/BiFtWx+ofWL+0DtXN6td80ArYxkPkVQMqCdH5koCPTA\
p8N0Y7Tlz4f3g3TwLeOAXlYh93QVtmDN/pPfM3bCz+B01yElTprTTVocs5Hie4Jp\
Y4tbmwjK12JOSVtnhFpr9i6nzNsZGJNKxIKJqaqcfZy+0DWZw2D2U2Eg1QIDAQAB\
oz8wPTAdBgNVHQ4EFgQUyirwLfq2k0AKiUzBPtjZLzYeXGYwDwYDVR0TBAgwBgEB\
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJyg91uGqylOGg/2\
aS1heJ99nXN5CdYTXZKUXYYNqPcseocdnXmNRY3HbA0h6prTsJJyuPhjYRBshy/L\
igKtlQCMPqxTw73or+dQ/c9SuL3yfsTM/jcHHNLynZ+FhU8uwd7dW5QPzCU9v5tf\
ZqC6mK3nsUWhVFz3o8dkJrepzu87kZUMzbQqJCs/C8tGH5RfdUeL7t3uOWUBToye\
GACv/WWOHHGCGK0b8w18ZQEghO1fvnyAZa+iKELrvWkvK6WPkiy/vJrUOD+Ps0jk\
hLkBJ5O6RqoGKwb5OEWNBSQ545s3UKOB8xDA7A0UbYqgxWnVnksYZQ1/W+HLwOxt\
xPJATP2vPxGvhpQBnIkYRP93AJe/9vnkyrmzQRjlxDTdr86mUFRdQVX2KR/7SSG1\
+vm0hfhmI25qFEn4C1liUEoibHJv2AzbJIUAjiToltKMvn5z87bn9pOiQyo27mkB\
a5EDWrUh9qPILZhvSuEfHtwdFONXmtOZ8qAjVV9z+0CLUcL/Kw==
-----END CERTIFICATE-----`,
        },
    };

    const client = new pg.Client(config);
    client.connect(function (err) {
        if (err) throw err;
        client.query("SELECT VERSION()", [], function (err, result) {
            if (err) throw err;

            console.log(result.rows[0]);
            client.end(function (err) {
                if (err) throw err;
            });
        });
    });
    */}




    const client = new Client({
        user: "avnadmin",
        password: "AVNS_sV-SRDDAIJw3xvvvV9R",
        host: "semsmart-semsmart-lst2025.g.aivencloud.com",
        port: "18199",
        database: "defaultdb",
        ssl: {
            rejectUnauthorized: true,
            ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIULPokhEz2CRNovNnp0RxFxXg+EQYwDQYJKoZIhvcNAQEM\
BQAwOjE4MDYGA1UEAwwvZDFjZDBlNjAtZTZhNS00MTBiLTkwNzgtMmI0MTQyN2Vl\
Y2VmIFByb2plY3QgQ0EwHhcNMjUwMTI3MDkyMDExWhcNMzUwMTI1MDkyMDExWjA6\
MTgwNgYDVQQDDC9kMWNkMGU2MC1lNmE1LTQxMGItOTA3OC0yYjQxNDI3ZWVjZWYg\
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAL/1Ea2i\
SNXf0eDvMK/elf62/QkNJN3H916pj5eseQKO7QvX46xZCdKGK1UNzhiFTkVbcTAi\
iBOxE6LqNJ/XahLxvEp856hNUu9F5udfIWJEMXAzSHcCdB1/gpHEH8Dnl1G+y0qd\
Iuw8xp7ShMWN75dhXkJmVw3vRc3agMqNKtLc9ifYiD/TGtLBZyMv1v6mROegyFAL\
bLiMRdemyyP8B7mdeRR+rZ82oXqyHHku1kkVnKOm+08JH443Ct2eSuOGZIEZJ+9x\
wHE6xSckbWI6C8a8oA4+5W3fi3fry/oc7s10qRHHiZf59ryQ453T9K/o+8ieainB\
eM5OsYqb3iAW23/JM0LT/BiFtWx+ofWL+0DtXN6td80ArYxkPkVQMqCdH5koCPTA\
p8N0Y7Tlz4f3g3TwLeOAXlYh93QVtmDN/pPfM3bCz+B01yElTprTTVocs5Hie4Jp\
Y4tbmwjK12JOSVtnhFpr9i6nzNsZGJNKxIKJqaqcfZy+0DWZw2D2U2Eg1QIDAQAB\
oz8wPTAdBgNVHQ4EFgQUyirwLfq2k0AKiUzBPtjZLzYeXGYwDwYDVR0TBAgwBgEB\
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJyg91uGqylOGg/2\
aS1heJ99nXN5CdYTXZKUXYYNqPcseocdnXmNRY3HbA0h6prTsJJyuPhjYRBshy/L\
igKtlQCMPqxTw73or+dQ/c9SuL3yfsTM/jcHHNLynZ+FhU8uwd7dW5QPzCU9v5tf\
ZqC6mK3nsUWhVFz3o8dkJrepzu87kZUMzbQqJCs/C8tGH5RfdUeL7t3uOWUBToye\
GACv/WWOHHGCGK0b8w18ZQEghO1fvnyAZa+iKELrvWkvK6WPkiy/vJrUOD+Ps0jk\
hLkBJ5O6RqoGKwb5OEWNBSQ545s3UKOB8xDA7A0UbYqgxWnVnksYZQ1/W+HLwOxt\
xPJATP2vPxGvhpQBnIkYRP93AJe/9vnkyrmzQRjlxDTdr86mUFRdQVX2KR/7SSG1\
+vm0hfhmI25qFEn4C1liUEoibHJv2AzbJIUAjiToltKMvn5z87bn9pOiQyo27mkB\
a5EDWrUh9qPILZhvSuEfHtwdFONXmtOZ8qAjVV9z+0CLUcL/Kw==
-----END CERTIFICATE-----`,
        }
    });

    client.connect();



}

module.exports = { connectDb };


