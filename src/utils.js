import { initializeApp } from "firebase/app"
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
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
    updateDoc

} from "firebase/firestore"
import { toast } from "react-toastify";

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
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const emailAndPasswordSignUp = async (email, password, username, data) => {
    let currentUser = null
    try {
        let existingUser = null
        const userCollection = collection(firebaseDb, "users")
        const userQuery = query(userCollection, where("username", "==", username))
        let sameUser = await getDocs(userQuery)
        sameUser.forEach((user) => {
            existingUser = user?.id
        })
        if (existingUser === null) {
            const newUser = await createUserWithEmailAndPassword(auth, email, password)
            currentUser = newUser.user
            const userDocRef = doc(firebaseDb, "users", currentUser.uid)
            const userSnapshot = await getDoc(userDocRef)
            if (!userSnapshot.exists()) {
                await setDoc(doc(firebaseDb, "users", currentUser?.uid),
                    {
                        uid: currentUser.uid,
                        ...data,
                        createdAt: serverTimestamp()
                    })
                existingUser = null
            }

        }
        else {
            toast.error("Username already exists", {
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                closeButton: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                type: "error",
                position: toast.POSITION.TOP_RIGHT,
            })
        }

    } catch (e) {

        toast.error(e, {
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            closeButton: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            type: "error",
            position: toast.POSITION.TOP_RIGHT,
        })
    }
    return currentUser?.uid
}
export const logInWithEmailAndPassword = async (email, password) => {
    let user = null
    try {
        user = await signInWithEmailAndPassword(auth, email, password)
    }
    catch (e) {
        console.log(e.message)
    }

    return user?.user?.uid
}

//Add like


export const signOutUser = async () => {
    await signOut(auth)
}







































//User image generator functions

export const setRandomColor = () => {
    const letters = `0123456789ABCDEF`;
    let color = `#`;

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const setInitials = (name) => {
    let initials
    const splitName = name.split(" ")
    const nameLength = splitName.length
    if (nameLength > 1) {
        initials = splitName[0].substring(0.1) + splitName[nameLength - 1].substring(0, 1)
    }
    else if (nameLength === 1) {
        initials = splitName[0].substring(0.1)
    }
    else return null

    return initials.toUpperCase()
}

export const createIconFromName = (iconSize, name, color) => {
    if (name === null) return
    let iconName = setInitials(name)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = canvas.height = iconSize
    context.fillStyle = "#ffffff"
    context.fillRect(0, 0, iconSize, iconSize)

    context.fillStyle = `${color}50`
    context.fillRect(0, 0, iconSize, iconSize)

    context.fillStyle = color;
    context.textBaseline = 'middle'
    context.textAlign = 'center'
    context.font = `${iconSize / 2}px Roboto`
    context.fillText(iconName, (iconSize / 2), (iconSize / 2))
    return canvas.toDataURL()
}
