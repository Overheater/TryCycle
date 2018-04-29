export class Trip {
    constructor(id, name,date,type,tripsSaved,description) {
        this.ID = id;
        this.Name = name;
        this.Date = date;
        this.Type = type;
        this.TripsSaved=tripsSaved;
        //Pictures were never implemented due to the  library killing my project twice
       // this.Picture = picture;
        this.Description =description;
    }

    getID() {
        return this.ID;
    }

    getName() {
        return this.Name;
    }
    getDate() {
        return this.Date;
    }
    getType() {
        return this.Type;
    }
   /* getPicture() {
        return this.Picture;
    }*/
    getDescription() {
        return this.Description;
    }
}