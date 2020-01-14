import instance from "./";

export const firstToken = async data => {
  try {
    const response = await instance.post("/token", {
      user: data.user,
      password: data.password
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const userLogged = async id => {
  try {
    const response = await instance.post("/userLog", id);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const goSignup = async data => {
  try {
    const response = await instance.post("/signup", {
      name: data.name,
      password: data.password,
      email: data.email,
      img: data.img
    });

    return response.data;
  } catch (e) {
    console.log(e);
  }
};
