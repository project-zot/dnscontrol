// Providers

var REG_HEX = NewRegistrar('hexonet', 'HEXONET');
var REG_NONE = NewRegistrar('none', 'NONE');
var dns_hex = NewDnsProvider('hexonet', 'HEXONET', {
  default_soa: {
    master: "ns1.ispapi.net.",
    mbox: "hostmaster.asgaard.org.",
    refresh: 3600,
    retry: 300,
    expire: 864000,
    minttl: 60,
  }
});

// Defaults

DEFAULTS(
    // DnsProvider(dns_r53,2), DnsProvider(dns_gc,2), DnsProvider(dns_hex,1),
    DnsProvider(dns_hex,3),
    NAMESERVER_TTL('5m'), DefaultTTL('1m')
);

// Macros

// var GSUITE_MX = [
//     MX('@', 10, 'aspmx.l.google.com.'),
//     MX('@', 50, 'alt1.aspmx.l.google.com.'),
//     MX('@', 50, 'alt2.aspmx.l.google.com.'),
//     MX('@', 100, 'alt3.aspmx.l.google.com.'),
//     MX('@', 100, 'alt4.aspmx.l.google.com.'),
// ]
// 
// var GSUITE_SPF = TXT('@', [
//     'v=spf1',
//     'include:_spf.google.com',
//     '~all'
// ].join(' '));
 
// Domains

require("domains/zotregistry_io.js");

