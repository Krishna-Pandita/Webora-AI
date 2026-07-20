import React from 'react'
import { motion } from 'motion/react'
import { Sparkles, X } from 'lucide-react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from "../redux/userSlice";


const LoginModel = ({ open, onClose }) => {
    const dispatch = useDispatch()

        const handleGoogleAuth = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
    console.log(result);
  
           const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/google`, {
                name: result.user.displayName,
                email: result.user.email,
                avatar: result.user.photoURL
            }, { withCredentials: true })
         dispatch(setUserData(data))
            onClose()
        } catch (error) {
            console.log(error)
        }
      }


  return (
    <div>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-blacl/80 backdrop-blur-xl px-4 "
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full max-w-md p-px rounded-3xl bg-linearto-br from-purple-500/40 via-blue-500/30 to-transparent"
          >
            <div className="relative rounded-3xl bg-[#0b0b0b] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0,0.8)] overflow-hidden">
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-500/30 blur-[140px]" />
              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-500/25 blur-[140px]" />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-20 text-zinc-400 hover:text-white transition text-lg"
              >
                <X />
              </button>

              <div className="relative px-8 pt-14 pb-10 text-center">
                <div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-gray-300">
                    AI Website Builder
                  </span>
                </div>
                <h2 className="text-3xl font-semibold leading-tight mb-3 space-x-2 ">
                  <span className="text-white">Welcome to</span>
                  <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Webora ai
                  </span>
                </h2>

                <motion.button
                onClick={handleGoogleAuth}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative w-full h-13 rounded-xl bg-white text-black font-semibold shadow-xl overflow-hidden"
                >
                  <div className="relative flex items-center justify-center gap-3">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr6QPPAkDTQxdk7U4SNlO8f4Fo5plUU3OnmHKKGB0Uew&s=10"
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />
                    Continue with Google
                  </div>
                </motion.button>

                <div className="flex items-center gap-4 my-10">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="text-xs tracking-tight text-zinc-500">
                    Secure Login
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed">
                  By continuing you agree to our{" "}
                  <span className="underline cursor-pointer hover:text-zinc-300">
                    Terms of Services
                  </span>{" "}
                  and{" "}
                  <span className="underline cursor-pointer hover:text-zinc-300">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LoginModel;
