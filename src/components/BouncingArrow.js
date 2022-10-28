import React from 'react'
import { motion } from 'framer-motion';
import { AiFillDownCircle } from "react-icons/ai"

function BouncingArrow() {
  return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
        >
            <AiFillDownCircle className="text-red-500 rounded-full text-3xl"/>
        </motion.div>
  )
}

export default BouncingArrow