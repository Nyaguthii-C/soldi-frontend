import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [

    react(),

    VitePWA({

      registerType:"autoUpdate",

      includeAssets:[

        "favicon.ico",

        "apple-touch-icon.png",

        "masked-icon.svg"

      ],

      manifest:{

        name:"Soldi",

        short_name:"Soldi",

        description:

        "Personal Expense Tracker",

        theme_color:"#0d6efd",

        background_color:"#ffffff",

        display:"standalone",

        start_url:"/",

        icons:[

          {

            src:"icon-192.png",

            sizes:"192x192",

            type:"image/png"

          },

          {

            src:"icon-256.png",

            sizes:"256x256",

            type:"image/png"

          }

        ]

      }

    })

  ]

})