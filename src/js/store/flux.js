const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          id: 1,
          title: "Do the dishes",
        },
        {
          id: 2,
          title: "Wash car",

        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        // const demo = store.demo.map((elm, i) => {
        //   if (i === index) elm.background = color;
        //   return elm;
        // });

        //reset the global store
        setStore({ demo: demo });
      },

      addNewTask: (task) => {
          
          const store = getStore();
          const demo = store.demo;
          const newtask = {id: demo.length + 1, title: task}
          demo.push(newtask)
          setStore({ demo: demo });
      },

      deleteTask: (id) => {
        const store = getStore();

      const demo = store.demo.filter((item, index) => {
        return index != id
      })
      setStore({ demo: demo });
      },
    },
  };
};

export default getState;
