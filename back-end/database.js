const {Pool} = require("pg")

const createTblQry = ``

const pool = new Pool({
    host:"crud-doacoes-rotary-pdsi-equipe-3.j.aivencloud.com",
    user:"avnadmin",
    port:15804,
    password:"AVNS_h_LQ-ynGtAuYGC2d3uJ",
    database:"defaultdb",
    ssl  : {
        ca : `-----BEGIN CERTIFICATE-----
            MIIEQTCCAqmgAwIBAgIUEqF/XG4o/CiQSSSvKaDzatLRAb8wDQYJKoZIhvcNAQEM
            BQAwOjE4MDYGA1UEAwwvNGExMDg1ODktZDBlMC00MDljLWIyOGEtYTA5OWU3NjU5
            ZmFiIFByb2plY3QgQ0EwHhcNMjQxMDMxMTgyNjM0WhcNMzQxMDI5MTgyNjM0WjA6
            MTgwNgYDVQQDDC80YTEwODU4OS1kMGUwLTQwOWMtYjI4YS1hMDk5ZTc2NTlmYWIg
            UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAMI836VP
            FfhIBXZXvN0fNtz8LypzADYojBJw7DlJiWZp2kEvojMDlwjwwHUMLqh0v0bDaSIj
            yeGt8SlWgc0o00G0M27YRQ/nn/EPR5yzSSYeGpFOqosWtBxbweXu2O0jwH9llDhp
            wTUU6tkYJBPGY4yLfOMXx+iNvqLBRIvcGAwnFs7qhiaXzEYuLgCoo02RBP5r/unj
            icMYH24mOlKG/0WHz/LuYBh76dYzegReEWLvQ0kHU3fr4E/jEUR/RlgxBa+IIq2e
            kPIzzckYyope4IRZBu3Xk58gsY52rmwa1mfIKsajs0Gc4zn1j/ndqxUuiVMvtba0
            rl04OrFMaipXKO4K041TEtomlHYRXPs9ff+0dQpUe6BAgFI8meRG4VS0lyoBgvui
            ejxqRsggyusLU+uJLswEdb8GcMD8y81GyWSRiafCIB3h+n8vtcny4/tiyLBBjScB
            6+YVeVC7gDTHENJIii3d3USVr3mDg8Ipypo7FywsENUhk5nYe24PJL0bLQIDAQAB
            oz8wPTAdBgNVHQ4EFgQUMqObmEaOmMcjqTW8mjPOuFxcdCwwDwYDVR0TBAgwBgEB
            /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBABKYPESSmPR99zPt
            ppzZCWuUKrSuqaAaIGMJwRFNgh8PVZaiZEvNipI1vYxtWj4dCbPHFXo0pFBdso4E
            aKyeiT6XVR9Kxm0oVCl6TbV+PqCeGY2sL9PIY78CjOLv7aBJqagECehqc2/RnK7/
            KFyHfAYIRdAzSig74ZLV0V6cxnZHRj7FzZGq1L8USM38D2WJ8pekDELYSl/dGdrq
            zH+/puDMhl+H4LmhNluoWVmDnmIi8M/RwR1479hiXLQN3kxrQpXOrDr7HjQ4PQJK
            8N/tJGqqD0E1Srb/7z+DCq4DIcZHkptpaQDQ9jKeEM/w3CqV51Zgshbos65niBL3
            1mY8qbC+4e4HlxH20oaAhpG80de+4+v73nSyweHXEgs24k39DhQJY5e+s05fIoIg
            OlIhXIiIaJq5ajapGGlNmwBOSIHsRt74fkLv9xoVh9RXH5X+ZsjmTC+Ny0BpIKca
            5+Nsz6KLRRXm6bWCNwlgLZoSilukD3c1N/s3foALdc7bSbiUgA==
            -----END CERTIFICATE-----`
    }
})
/*
pool.query(`SELECT * FROM pg_catalog.pg_tables WHERE schemaname='public';`).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
*/
module.exports = pool;