import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-24 px-8 ">
      <div className="w--full">
        <div>
          <p className="font-semibold text-gray text-lg">
            More ways to shop: {' '}
            <span className="underline text-blue">
            Find a watch Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
            other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-lg">
            Or call ++212610297321
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-lg">Copright @ 2024 C-Watch Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-lg">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer