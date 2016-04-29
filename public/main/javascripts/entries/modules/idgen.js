export default {
  idCache: [],
   generateUUID: function generateUUID() {
       var self = this,
         d = new Date().getTime(),
         uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
           var r = (d + Math.random()*16)%16 | 0;
           d = Math.floor(d/16);
           return (c=='x' ? r : (r&0x3|0x8)).toString(16);
         });

       if(self.idCache.indexOf(uuid) > -1) {
         return self.generateUUID();
       } else {
         self.idCache.push(uuid);
         return uuid;
       }
   }
};
