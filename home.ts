class Grocery {
    name: string;
    quantity: number;
  
    constructor(name: string, quantity: number) {
      this.name = name;
      this.quantity = quantity;
    }
  }
  
  const groceries: Grocery[] = [
    new Grocery("Milk", 3),
    new Grocery("Bread", 6),
    new Grocery("Eggs", 11),
  ];
  
  export { groceries };

  removeItem(item) {
    console.log("removing Item - ", item);
    const toast = this.toasterCtrl.create({
      message: 'Removing Item - ' + ClipboardItem.name + "....",
      duration: 3000
    });
    toast.present();
  }

  addItem(){
    console.log("Adding Item + ", item);
    this.showAddItemPrompt();
  }

  showAddItemPrompt(){
    const.prompt = this.alertCtrl.create({
      title: 'Login'
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }
 
  
