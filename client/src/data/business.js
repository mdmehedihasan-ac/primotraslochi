export const BUSINESS = {
  name: 'Primo Traslochi',
  phone: '+393933152569',
  phoneDisplay: '+39 393 315 2569',
  phoneTel: 'tel:+393933152569',
  piva: '01734320185',
  address: 'Via Cuneo 8, 27100 Pavia (PV)',
  areas: 'Pavia · Lodi · Cremona · Milano',
  waBase: 'https://wa.me/393933152569',
  googleReviews: 'https://g.page/primotraslochi/review',
};

export const waLink = (text) =>
  `${BUSINESS.waBase}?text=${encodeURIComponent(text)}`;

export const WA_MESSAGES = {
  generic:     'Ciao, vorrei informazioni sui vostri servizi di trasloco.',
  preventivo:  'Ciao, vorrei un preventivo gratuito per un trasloco.\nNome: \nData trasloco: \nDa (partenza): \nA (destinazione): \nNota: ',
  sopralluogo: 'Ciao, vorrei prenotare un sopralluogo gratuito.\nNome: \nIndirizzo: \nData preferita: \nNota: ',
  noleggio:    'Ciao, vorrei informazioni sul noleggio mezzi.\nTipo mezzo: \nData: \nLocalità: \nNota: ',
  furgone:     'Ciao, vorrei noleggiare un furgone.\nData: \nLocalità di partenza: \nDestinazione: \nNota: ',
  piattaforma: 'Ciao, vorrei informazioni sulla piattaforma aerea.\nData: \nLocalità: \nPiano: \nNota: ',
};
