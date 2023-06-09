export const fetchUser = ()=>{
    const userInfo = 
    localStorage.getItem("user") !== null
    ? JSON.parse(localStorage.getItem("user")) 
    : localStorage.clear();
    return userInfo;
};

export const fetchRoomId = ()=>{
    const userRoomId = 
    localStorage.getItem("roomId") !== null
    ? JSON.parse(localStorage.getItem("roomId")) 
    : localStorage.clear();
    return userRoomId;
};

export const fetchNewCode = ()=>{
    const userCode = 
    localStorage.getItem("newCode") !== null
    ? JSON.parse(localStorage.getItem("newCode")) 
    : localStorage.clear();
    return userCode;
};
