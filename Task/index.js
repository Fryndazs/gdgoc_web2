let notes = [
  {
    id: 1,
    heading: "Mempelajari Javascript",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non expedita similique tempora tempore exercitationem. Accusamus sint porro iste quos velit aperiam voluptas placeat error nulla maxime id, deserunt eum.",
    created_by: "John Doe",
    created_at: 1738146027613
  }
]

const createNote = (heading, description, created_by) => {
  const note = {
    id: notes.length + 1,
    heading,
    description,
    created_by,
    created_at: Date.now()
  }
  notes.push(note);
}

const readNote = () => {
  console.log(notes);
}

const updateNote = (id, newHeading, newDescription) => { //you could add newCreatedBy if you want to update the created_by or newCreatedAt for created_at value
  const note = notes.find(note => note.id === id);
  if (note) {
    note.heading = newHeading;
    note.description = newDescription;
    // note.created_by = newCreatedBy;
    // note.created_at = newCreatedAt;
  }
}

const deleteNote = (id) => {
  notes = notes.filter(note => note.id !== id);
}

// mengetes kode (diharapkan untuk tidak diganti): 
createNote("Belajar React", "Mempelajari dasar-dasar React dan cara membuat komponen.", "Jane Doe")
readNote();
console.log("=================================================================================================================")
updateNote(1, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.");
readNote();
console.log("=================================================================================================================")
deleteNote(1);
readNote();

// to test the created_by for example below
// console.log("=================================================================================================================")
// updateNote(2, "Mempelajari JavaScript Lanjutan", "Mempelajari konsep lanjutan dalam JavaScript.", "Ucok");
// readNote();