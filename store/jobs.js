import api from '@/services/api'

export const state = () => ({
  list: [],
  titre: "Je teste",
  jobs: [
    {
      // icon: true,
      // jobid: "001",
      title: "React Native Developer",
      company: "Auchan",
      location: "London",
      salary: "70 000 - 120 000 ",
      contractType: "CDI",
      skills: [
        { label: "Javascript" },
        { label: "Vuejs" },
        { label: "React js" }
      ],
      isPublished: false,
      description: "Solides compétences en Javascript et vue js",
      // icon: "assets/img/auchan.png"
      imageUrl: "https://www.cap-nor.com/wp-content/uploads/AUCHAN-logo-300.png"
    },
  ],
  jobItems: [
    {
      // icon: true,
      jobid: "001",
      title: "React Native Developer",
      company: "Auchan",
      location: "London",
      salary: "70 000 - 120 000 ",
      tags: [
        { name: "Javascript" },
        { name: "Vuejs" },
        { name: "React js" }
      ],
      // icon: "assets/img/auchan.png"
      icon: "https://www.cap-nor.com/wp-content/uploads/AUCHAN-logo-300.png"
    },
    {
      // icon: true,
      jobid: "002",
      title: "React Native Developer",
      company: "Dropbox",
      location: "London",
      salary: "70 000 - 120 000 ",
      tags: [{ name: "Javascript" }, { name: "Vuejs" }],
      icon:
        "https://aegisbiztech.com/wp-content/uploads/2016/02/dropbox-logo-235x300.png"
    },
    {
      // icon: true,
      jobid: "003",
      title: "React Native Developer",
      company: "Carrefour",
      location: "London",
      salary: "70 000 - 120 000 ",
      tags: [{ name: "Javascript" }, { name: "Vuejs" }],
      icon:
        "https://www.docaposte.com/uploads/customers/logos/carrefour-2019.png"
    },
    {
      // icon: true,
      jobid: "004",
      title: "React Native Developer",
      company: "Gagemini",
      location: "London",
      salary: "70 000 - 120 000 ",
      tags: [{ name: "Javascript" }, { name: "Vuejs" }],
      icon: "https://www.idvroom.com/image/55075_178_120.png"
    },
    {
      // icon: true,
      jobid: "005",
      title: "React Native Developer",
      company: "Edf",
      location: "London",
      salary: "70 000 - 120 000 ",
      tags: [{ name: "Javascript" }, { name: "Vuejs" }],
      icon: "https://dirigeants-entreprise.com/images/t1205-800-800-80.jpg"
    },
    {
      // icon: true,
      jobid: "006",
      title: "React Native Developer",
      company: "Renault",
      location: "London",
      salary: "70 000 - 120 000 ",
      tags: [
        { name: "Javascript" },
        { name: "Javascript" },
        { name: "Javascript" },
        { name: "Javascript" },
        { name: "Vuejs" }
      ],
      icon:
        "https://cdn.freebiesupply.com/logos/large/2x/renault-logo-png-transparent.png"
    }
  ]
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },

  ADD_JOB(state, newJob) {
    state.jobs.push(newJob);
    console.log('Mutation: Ok, A job has been added');
  },
}

export const actions = {

  async ADD_JOB({ commit }, newJob) {
    console.log('Action: Trying to add newJob');
    if (!newJob || !newJob.title) {
      console.error('Invalid newJob item');
      return;
    }
    const result = await api.addJob(newJob);
    if (result === true) commit('ADD_JOB', newJob);
    else console.error('Could not add newJob');
  },

}

export const getters = {
  // ...
  getJobItems: (state) => {
    return state.jobs
  }

}



