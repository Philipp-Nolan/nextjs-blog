import { useState } from 'react';
import Image from 'next/image';
import woomanImg from '../public/images/3.jpeg';

export default function Header() {
  const [toogle, setToggle] = useState(false);

  return (
    <header className="bg-gray-900">
      <div className="flex justify-between bg-gray-900 px-4 py-3">
        <div>
          <svg
            className="h-8 w-auto"
            viewBox="0 0 187 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M60.064 27h3.768l3.144-11.088L70.144 27h3.768l4.704-16.8h-3.48L71.92 22.656 68.392 10.2H65.56l-3.504 12.456L58.84 10.2h-3.48L60.064 27Zm24.61.336c3.529 0 6.36-2.76 6.36-6.336 0-3.576-2.831-6.336-6.36-6.336-3.527 0-6.335 2.76-6.335 6.336 0 3.576 2.808 6.336 6.336 6.336Zm0-3.024c-1.823 0-3.24-1.368-3.24-3.312 0-1.944 1.417-3.312 3.24-3.312 1.849 0 3.265 1.368 3.265 3.312 0 1.944-1.416 3.312-3.264 3.312Zm11.635-7.248V15h-3.096v12h3.096v-5.736c0-2.52 2.04-3.24 3.648-3.048V14.76c-1.512 0-3.024.672-3.648 2.304ZM112.832 27l-4.968-6.072L112.688 15h-3.696l-4.128 5.28V10.2h-3.096V27h3.096v-5.448L109.232 27h3.6Z"
              fill="#fff"
            />
            <path
              d="M120.089 27.336c2.352 0 4.392-1.248 5.424-3.12l-2.688-1.536c-.48.984-1.512 1.584-2.76 1.584-1.848 0-3.216-1.368-3.216-3.264 0-1.92 1.368-3.288 3.216-3.288 1.224 0 2.256.624 2.736 1.608l2.664-1.56c-.984-1.848-3.024-3.096-5.376-3.096-3.648 0-6.336 2.76-6.336 6.336 0 3.576 2.688 6.336 6.336 6.336ZM136.083 15v1.416c-.864-1.08-2.16-1.752-3.912-1.752-3.192 0-5.832 2.76-5.832 6.336 0 3.576 2.64 6.336 5.832 6.336 1.752 0 3.048-.672 3.912-1.752V27h3.096V15h-3.096Zm-3.336 9.384c-1.896 0-3.312-1.368-3.312-3.384s1.416-3.384 3.312-3.384c1.92 0 3.336 1.368 3.336 3.384s-1.416 3.384-3.336 3.384Zm16.103-6.408V15h-2.712v-3.36l-3.096.936V15h-2.088v2.976h2.088v4.992c0 3.24 1.464 4.512 5.808 4.032v-2.808c-1.776.096-2.712.072-2.712-1.224v-4.992h2.712Zm3.719-4.416c1.056 0 1.92-.864 1.92-1.896s-.864-1.92-1.92-1.92c-1.032 0-1.896.888-1.896 1.92s.864 1.896 1.896 1.896ZM151.033 27h3.096V15h-3.096v12Zm11.642.336c3.528 0 6.36-2.76 6.36-6.336 0-3.576-2.832-6.336-6.36-6.336-3.528 0-6.336 2.76-6.336 6.336 0 3.576 2.808 6.336 6.336 6.336Zm0-3.024c-1.824 0-3.24-1.368-3.24-3.312 0-1.944 1.416-3.312 3.24-3.312 1.848 0 3.264 1.368 3.264 3.312 0 1.944-1.416 3.312-3.264 3.312Zm15.21-9.648c-1.608 0-2.856.6-3.576 1.68V15h-3.096v12h3.096v-6.48c0-2.088 1.128-2.976 2.64-2.976 1.392 0 2.376.84 2.376 2.472V27h3.096v-7.368c0-3.192-1.992-4.968-4.536-4.968ZM42.911 11.604 35.213 7.16v20.645h9v2h-44v-2h4v-12.72l-3.728.933L0 14.078l21.09-5.273h3.122a9.551 9.551 0 0 0-.68 2.559l-.483 3.975 5.164-2.982v15.448h5V7.161l-7.696 4.444a7.502 7.502 0 0 1 2.565-4.8h-4.12a7.489 7.489 0 0 1 6.646-2.972L25.017.603a7.488 7.488 0 0 1 6.696.403c1.039.6 1.88 1.41 2.5 2.347a7.461 7.461 0 0 1 2.5-2.347 7.49 7.49 0 0 1 6.698-.402l-5.593 3.229a7.488 7.488 0 0 1 6.646 2.973h-4.12a7.498 7.498 0 0 1 2.567 4.798ZM24.213 27.805v-10h-6v10h6Zm-11-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
              fill="#A3BFFA"
            />
          </svg>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setToggle(!toogle)}
            className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
            <svg className="h-6 w-6 fill-current " xmlns="http://www.w3.org/2000/svg">
              {toogle ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.778 11.364a1 1 0 0 1-1.414 1.414L6.536 7.95l-4.829 4.828a1 1 0 0 1-1.414-1.414L5.12 6.536.293 1.707A1 1 0 0 1 1.707.293L6.536 5.12 11.364.293a1 1 0 1 1 1.414 1.414L7.95 6.536l4.828 4.828Z"
                />
              ) : (
                <path d="M0 1a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H1Z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={toogle ? 'block' : 'hidden'}>
        <div className="px-2 pt-2 pb-5  border-b border-gray-800">
          <a
            className="rounded px-3 pt-1 block font-semibold text-white hover:bg-gray-800"
            href="#">
            List your property
          </a>
          <a
            className="rounded px-3 pt-1 mt-1 block font-semibold text-white hover:bg-gray-800"
            href="#">
            Trips
          </a>
          <a
            className="rounded px-3 pt-1 mt-1 block font-semibold text-white hover:bg-gray-800"
            href="#">
            Messages
          </a>
        </div>
        <div className="px-5 py-3">
          <div className="flex items-center">
            <Image
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-600"
              src={woomanImg}
              alt="avatar"
              width="40px"
              height="40px"
            />

            <span className="ml-2 font-semibold text-gray-200 ">Isla Schoger</span>
          </div>
          <div className="mt-4">
            <a className="block text-gray-400 hover:text-white" href="#">
              Account Settings
            </a>
            <a className="mt-3 block text-gray-400 hover:text-white" href="#">
              Support
            </a>
            <a className="mt-3 block text-gray-400 hover:text-white" href="#">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
