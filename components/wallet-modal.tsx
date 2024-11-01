// lib/wallet-modal.tsx

'use client';

import { useWeb3Modal } from '@web3modal/wagmi/react';
import { Button, Avatar} from '@nextui-org/react';

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return <Button
    startContent={<Avatar alt="Wallet" className="w-8 h-8" src="./wallet.svg" />}
    variant="shadow"
    onClick={() => open()}>Connect</Button>;
}