import instance from "./";

export const firstToken = async data => {
  try {
    const response = await instance.post("/auth/login", {
      name: data.user,
      password: data.password
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const userLogged = async id => {
  try {
    const response = await instance.post("/auth/autolog", id);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const goSignup = async data => {
  try {
    const response = await instance.post(
      "/auth/signUp",
      {
        name: data.name,
        password: data.password,
        email: data.email,
        img: data.img
      }
      // { headers: { "Content-Type": "multipart/form-data" } }
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
