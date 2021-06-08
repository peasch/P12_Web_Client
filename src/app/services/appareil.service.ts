export class AppareilService {
  appareils = [
    {
      id:1,
      name: 'Splendor',
      status: 'dispo'
    },
    {
      id:2,
      name: 'The crew',
      status: 'indispo'
    },
    {
      id:3,
      name: '6 qui prend!',
      status: 'dispo'
    }
  ];
  getAppareilById(id:number){
    const appareil = this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id ===id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for (let appareil of this.appareils){
      appareil.status='dispo';
    }
  }
  switchOffAll(){
    for (let appareil of this.appareils){
      appareil.status='indispo'
    }
  }
  switchOnOne(index:number){
    this.appareils[index].status="dispo"
  }
  switchOffOne(index:number){
    this.appareils[index].status="indispo"
  }
}
