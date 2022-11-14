// const getState = ({ getStore, getActions, setStore }) => {
  const getState = ({ getStore, getActions, setStore }) => {
    function getFetch() {
      fetch("https://assets.breatheco.de/apis/fake/todos/user/usertest197", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          console.log(resp.ok);
          console.log(resp.status);
          return resp.json();
        })
        .then((data) => {
          const tasks = data.map((item, index) => {
            return item.label;
          });
          setStore({ fetchTasks: [...tasks] });
        })
        .catch((error) => {
          console.log(error);
        });
    }

  return {
    store: {
      demo: [
   
      ],
      list: [],
      fetchTasks: [],
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
