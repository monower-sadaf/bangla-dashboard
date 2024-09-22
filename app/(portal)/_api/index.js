
import axios from "axios";
import Cookies from "js-cookie";


const  token = Cookies.get("token");

/* ...............service api start here...................*/

// 1.  upload service data api service Create
export const uploadServiceData = async (serviceData) => {
  try {
    const service = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/store/service`,
      serviceData
    );
    return service.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//2. get all services
export const getServices = async () => {
  try {
    const services = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/services`,
      {
        cache: "no-store",
      }
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
    return services?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//3. get single service by service id
export const getSingleService = async (id) => {
  try {
    const service = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => console.log(err));
    return service.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//4. update service
export const updateAnService = async (id, updateData) => {
  try {
    const service = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/service/${id}`,
      updateData
    );
    return service.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getRecentNews = async () => {
  const recentNews = await fetch("http://localhost:3000/db/recent_news.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return recentNews?.news;
};

export const getSingleNews = async (id) => {
  const news = await fetch("http://localhost:3000/db/recent_news.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return news?.news?.filter((item) => item?.id == id);
};

export const getMenuLinks = async () => {
  const menuLinks = await fetch("http://localhost:3000/db/menuLinks.json")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

  return menuLinks?.links;
};


/* ...............feature api end here...................*/

//1. upload feature  data api feature Create
export const uploadFeatureData = async (featureData) => {
  try {
    const feature = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/feature/store`,
      featureData
    );
    return feature.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//2. get features by service id
export const getFeaturesByServiceId = async (serviceId) => {
  try {
    const features = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/feature-by-service-id/${serviceId}`
    );
    return features.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//3. delete features by feature id

export const deleteFeature = async (id) => {
  try {
    const feature = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/feature/${id}`
    );
    return feature.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//4. update feature data by feature id
export const updateFeatureDataById = async (id, updateData) => {
  try {
    const feature = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/feature/${id}`,
      updateData
    );
    return feature.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};


// order post api
export const orderServiceApi = async (orderInfo)=>{
  try {
    const order = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/order/save`,
      orderInfo
    );
    return order.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// billing address post api

export const billingAddressPostApi = async (billingAddressInfo)=>{
  try {
    const billingAddress = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/order/billing-address/save`,
      billingAddressInfo
    );
    return billingAddress.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// payment post api
export const paymentPostApi = async (paymentInfo)=>{
  try {
    const paymentRes = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/order/payment/save`,paymentInfo);
    return paymentRes.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// get all payment api
export const getAllPaymentAPi = async (page,limit)=>{
  try {
    const paymentRes = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all/payments?page=${page}&limit=${limit}`);
    return paymentRes.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// get all orders api 
export const getAllOrdersApi = async () =>{
  try {
    const orders = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/all/orders`);
    // console.log("order Api:",orders);
    
    return orders.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//get single order api
export const getSingleOrderByIdApi = async (id) =>{
  try {
    const singleOrder = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`);
    return singleOrder.data;
    
  } catch (error) {
    console.log(error);
    return error;
  }
}


// get single order by service id
export const getSingleOrderByServiceId = async (serviceId) =>{
  try{
    const singleOrderByserviceId = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/by-service-id/${serviceId}`);
    return singleOrderByserviceId.data;
  }
  catch(error){
    console.log(error);
    return error;
  }
}



   /* user management section all api is here */

  //  1.create user api

  export const createUserApi = async (userData)=>{
    try {
      const user = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/create`,userData,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return user.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }


  // 2. get all users api

  export const getAllUsersApi = async ()=>{
    try {
      const users = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
      return users.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }



  /** ...................activity Logs api here start...............**** */

  // 1.get all activity logs api with pagination and other functionality

  export const getAllActivityLogsApi = async (page,limit)=>{
    try {
      const activityLogs = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/activity-logs/all?page=${page}&limit=${limit}`);
      return activityLogs.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }