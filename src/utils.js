import {initializeApp} from "firebase/app"
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import {
    getFirestore,
    doc,
    setDoc,
    serverTimestamp,
    getDoc,
    getDocs,
    collection,
    query,
    where,

} from "firebase/firestore"

//Base url
export const BASE_URL = "https://api.themoviedb.org/3/"
export const TRENDING_MOVIES_BY_DAY_URL = `${BASE_URL}trending/movie/day?api_key=672e218cbb77d06c47ae1e2d04209fb4`
export const TRENDING_MOVIES_BY_WEEK_URL = `${BASE_URL}trending/movie/week?api_key=672e218cbb77d06c47ae1e2d04209fb4`

//Image url
export const IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`

//Search url
export const SEARCH_MOVIE_URL = `${BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query&page=1&include_adult=false`

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASEAPIKEY,
    authDomain: process.env.REACT_APP_FIREBASEAUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASEPROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASEAPPID,
    measurementId: process.env.REACT_APP_FIREBASEMEASUREMENTID
};
//firebase initializations
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const firebaseDb = getFirestore(app)
const googleProvider= new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const emailAndPasswordSignUp = async (email, password,username,data) => {
    let currentUser = null
    try {
        let existingUser = null
        const userCollection = collection(firebaseDb,"users")
        const userQuery = query(userCollection,where("username", "==", username))
        let sameUser = await getDocs(userQuery)
        sameUser.forEach((user)=>{
            existingUser = user?.id
        })
            if(existingUser === null ){
                const newUser = await createUserWithEmailAndPassword(auth, email, password)
                currentUser = newUser.user
                const userDocRef = doc(firebaseDb,"users",currentUser.uid)
                const userSnapshot = await getDoc(userDocRef)
                if(!userSnapshot.exists()) {
                    await setDoc(doc(firebaseDb, "users", currentUser?.uid),
                        {
                            uid: currentUser.uid,
                            ...data,
                            createdAt: serverTimestamp()
                        })
                    existingUser = null
                }

            }
            else{
                alert("User with username already exists")
            }

    } catch (e) {
        alert(e.message)
    }
    return currentUser?.uid
}
export const logInWithEmailAndPassword = async(email,password)=>{
    let user =null
    try{
         user = await signInWithEmailAndPassword(auth,email,password)
        console.log("This is user", user.user.uid )
    }
    catch (e) {
        console.log(e.message)
    }

}
