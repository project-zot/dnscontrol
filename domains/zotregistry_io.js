D("zotregistry.io", REG_HEX,
//
// website
//
  CNAME('www', 'project-zot.github.io.'),
//
// PR test
// 
 TXT('@', 'zot is cool'),
//
// Naked A and AAAA records
//
  A('@', '185.199.108.153'),
  A('@', '185.199.109.153'),
  A('@', '185.199.110.153'),
  A('@', '185.199.111.153'),
  AAAA('@', '2606:50c0:8000::153'),
  AAAA('@', '2606:50c0:8001::153'),
  AAAA('@', '2606:50c0:8002::153'),
  AAAA('@', '2606:50c0:8003::153'),
  TXT('_github-pages-challenge-project-zot.docs', 'acee8e1be67bd9361fb30314926ee7'),
  CNAME('docs', 'project-zot.github.io.')
