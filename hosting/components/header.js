import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

import { signInWithMoralis } from "@moralisweb3/client-firebase-evm-auth";
import { useFirebase } from "../components/FirebaseInitializer";

import Logo from "../public/assets/xclusiveCryptoMart.png";
import Usa from "../public/assets/usa.png";

export default function Header() {
  const { auth, moralisAuth } = useFirebase();
  const [currentUser, setCurrentUser] = useState(
    () => auth.currentUser?.displayName
  );

  async function signInByMetaMask() {
    await signInWithMoralis(moralisAuth);
    setCurrentUser(auth.currentUser?.displayName);
  }

  async function signOut() {
    await auth.signOut();
    setCurrentUser(null);
  }

  return (
    <section className={styles.header}>
      <section className={styles.header_box}>
        <Link href="/">
          <Image src={Logo} alt="Logo image" width="110" height="30" />
        </Link>
      </section>
    </section>
  );
}
