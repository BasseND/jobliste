const api = {
  addJob(newJob) {
    console.log('API: Calling service for newJob:');
    console.log(newJob);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('API: Service call done!');
        resolve(true);
      }, 1000);
    });
  },
};

export default api;