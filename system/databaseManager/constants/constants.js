const MONGOWRAPPER_CONSTANTS = {
    STRINGS: {
        AND: '&',
        AT: '@',
        CLIENT_PARAMETERS: {
            AUTH_SOURCE: 'authSource',
            AUTH_MECHANISM: 'authMechanism',
            BEGINNING_STRING: '/?'
        },
        COLON: ':',
        EQUAL_SIGN: '=',
        MONGOSERVER: 'mongodb://',
        MONGOSERVER_SVR: 'mongodb+svr://',
        SLASH: '/'
    },
    AUTH_METHODS: {
        TLS: 'MONGODB-X509',
        DEFAULT: 'DEFAULT',
        SCRAM_256: 'SCRAM-SHA-256',
        SCRAM_1: 'SCRAM-SHA-1'
    }
};

module.exports = MONGOWRAPPER_CONSTANTS;