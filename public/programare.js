var d=new Date();
var t=d.getTime();
var counter=t;

document.getElementById("form").addEventListener("submit",(e)=>{
    var nume=document.getElementById("nume").value;
    var telefon=document.getElementById("telefon").value;
    var ora=document.getElementById("ora").value;
    var mesaj=document.getElementById("mesaj").value;
    var data=document.getElementById("data").value;
    var email=firebase.auth().currentUser.email;
    e.preventDefault();
    createProgramare(nume,telefon,data,ora,mesaj,email);
    form.reset();
});


function createProgramare(nume,telefon,data,ora,mesaj,email) {
    console.log(counter);
    counter+=1;
    console.log(counter);
    var programare={
        id:counter,
        nume:nume,
        telefon: telefon,
        data:data,
        ora: ora,
        mesaj:mesaj,
        email:firebase.auth().currentUser.email
    };
    
    let db=firebase.database().ref("programari/"+counter);
    db.set(programare);
    document.getElementById("programareSection").innerHTML=``;
    readProgramare();
       
}



function readProgramare() { 
    var prog=firebase.database().ref("programari/");
    prog.on("child_added",function(data) {
        var progValue=data.val();
        if(progValue.email===firebase.auth().currentUser.email && firebase.auth().currentUser.email!=="admin@gmail.com") 
           {
                document.getElementById("programareSection").innerHTML+=`
                <div class="programare" style="border:5px;">
                    <div class="programare-content">
                        <span class="nume" style="font-size:20px; color:darkblue;">${progValue.nume}</span>
                        <p>${progValue.telefon}</p>
                        <p>${progValue.data}</p>
                        <p>${progValue.ora}</p>
                        <p>${progValue.mesaj}</p>
                    </div>
                    <div class="programare-action">
                        <button type="submit" class="#b71c1c yellow darken-1 btn"  onclick="updateProgramare(${progValue.id},'${progValue.nume}','${progValue.telefon}','${progValue.data}','${progValue.ora}','${progValue.mesaj}')"><i class="fas fa-edit"></i>Edit</button>
                        <button type="submit" class="#b71c1c red darken-3 btn" onclick="deleteProgramare(${progValue.id})"><i class="fas fa-trash-alt"></i> Delete</button>
                            <br>
                            <br>
                            <br>
                            <br>
                    </div>
                </div>
                `
            }
            else
            if(firebase.auth().currentUser.email==="admin@gmail.com") 
            {
                document.getElementById("programareSection").innerHTML+=`
                <div class="programare" style="border:5px;">
                    <div class="programare-content">
                        <span class="nume" style="font-size:20px; color:darkblue;">${progValue.nume}</span>
                        <p>${progValue.telefon}</p>
                        <p>${progValue.data}</p>
                        <p>${progValue.ora}</p>
                        <p>${progValue.mesaj}</p>
                    </div>
                    <div class="programare-action">
                        
                        <button type="submit" class="#b71c1c red darken-3 btn" onclick="deleteProgramare(${progValue.id})"><i class="fas fa-trash-alt"></i> Delete</button>
                            <br>
                            <br>
                            <br>
                            <br>
                    </div>
                </div>
                `
            }
    });
           
}

//class="#f57f17 yellow darken-4 btn " class="fas fa-edit">



function reset() {
    document.getElementById("firstSection").innerHTML=`
       <div class="programare">
       <div class="programare-content">
        <form id="form">
           <input id="nume" type="text" placeholder="Nume">
           <input id="telefon" type="text" placeholder="Telefon"> 
           <input id="data" type="date" size="30">
           <input id="ora" type="text" placeholder="Ora"><br>
           <textarea placeholder="Mesaj(opțional)" cols="46" rows="5" id="mesaj"></textarea>
            <br>
            <br>
           <button type="submit" class="#00c853 green accent-4 btn" id="button1"><i class="fas fa-plus"></i> Adaugă programare</button>
           </form>
          </div>

         </div>
        `;
    document.getElementById("form").addEventListener("submit",(e)=>{
        var prog=document.getElementById("nume").value;
        var prog=document.getElementById("telefon").value;
        var prog=document.getElementById("data").value;
        var prog=document.getElementById("ora").value;
        var mesaj=document.getElementById("mesaj").value;
        var email=firebase.auth().currentUser.email;
        e.preventDefault();
        createProgramare(nume,telefon,data,ora,mesaj,email);
        form.reset();
    });
}


function updateProgramare(id,nume,telefon,data,ora,mesaj){
    document.getElementById("firstSection").innerHTML=`
    <div class="programare">
       <div class="programare-content">
        <form id="form2">
           <input id="nume" type="text" placeholder="Nume">
           <input id="telefon" type="text" placeholder="Telefon"> 
           <input id="data" type="date" size="30">
           <input id="ora" type="text" placeholder="Ora"><br>
           <textarea placeholder="Mesaj(optional)" cols="46" rows="5" id="mesaj"></textarea>
            <br>
            <br>
           <button type="submit" id="button2" class=" btn"><i class="fas fa-sync"></i> Edit</button>
//           <button type="submit" id="button3" class=" btn"><i class="fas fa-ban"></i> Cancel</button>
           </form>
          </div>

         </div>
        `;
////    #303f9f indigo darken-2 
    console.log("intra in update");
    document.getElementById("form2").addEventListener("submit",(e)=>{
//        console.log("mere aici4444?");
        e.preventDefault();
    });
    
//    
//    document.getElementById("button3").addEventListener("submit",(e)=>{
//        console.log("mere button 3?");
//        form2.reset();
//    });
//    
    console.log("intra");
    document.getElementById("form2").addEventListener("submit",(e)=>{
       console.log("intra in button2"); 
        updateProgramare2(id,document.getElementById("nume").value,document.getElementById("telefon").value,document.getElementById("data").value,document.getElementById("ora").value,document.getElementById("mesaj").value);
        console.log("intra dupa button2"); 
    }); 
    
    console.log("mere aici?");
    document.getElementById("telefon").value=telefon; //!!!!!!!!!!!!!!!!!!!!!!!!!
    document.getElementById("nume").value=nume;
    document.getElementById("data").value=data;
    document.getElementById("ora").value=ora;
    document.getElementById("mesaj").value=mesaj;
    
}

function updateProgramare2(id,nume,telefon,data,ora,mesaj) {
    console.log(counter);
    counter+=1;
    console.log(counter);
    var programareUpdated={
        nume:nume,
        id:id,
        telefon: telefon,
        data:data,
        ora: ora,
        mesaj:mesaj,
        email:firebase.auth().currentUser.email
    };
    
    let db=firebase.database().ref("programari/"+id);
    db.set(programareUpdated);
    document.getElementById("programareSection").innerHTML=``;
//    console.log("intra in update 2");
    readProgramare();
//    console.log("intra in update 2");
    reset();

}

function deleteProgramare(id) {
    var prog=firebase.database().ref("programari/"+id);
    prog.remove();
    reset();
    document.getElementById("programareSection").innerHTML='';
    readProgramare();
}



function logout(){

    firebase.auth().signOut();
    window.location="./index.html";

}



