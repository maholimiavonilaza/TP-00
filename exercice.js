const EventEmitter = require('events');

// Création d'un objet EventEmitter
const eventEmitter = new EventEmitter();

// Définition des listeners
function BellRingHandler1(arg) {
  if (arg === 'Jerry') {
    console.log('Bellring handler I');
    console.log('Tom aide-moi');
  } else {
    console.log(`Bonjour ${arg}`);
  }
}

function BellRingHandler2() {
  console.log('Bellring handler 2');
  eventEmitter.emit('NobodyHandler');
}

function NobodyHandler() {
  console.log('Désolé y a plus personne ici laissez votre message, s\'il vous plaît.');
}

// Ajout des listeners
eventEmitter.on('BellRing', BellRingHandler1);
eventEmitter.on('BellRing', BellRingHandler2);
eventEmitter.on('NobodyHandler', NobodyHandler);

// Test en émettant l'événement avec un seul argument 'Jerry'
eventEmitter.emit('BellRing', 'Jerry');
