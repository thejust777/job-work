import { Avatar } from '@mantine/core';
import { IconAsset, IconBell, IconSettings } from '@tabler/icons-react';

const Header = () => {
   return <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
    <div className="flex gap-3 items-center">
        <IconAsset className="h-10 w-10" stroke={1.25} />
        <div className="text-3xl font-semibold">iJobs</div>
    </div>
    <div className="flex gap-2 ">
        <a href="/#">Find a Job</a>
        <a href="/#">Find a Talent</a>
        <a href="/#">Upload Job</a>
        <a href="/#">About us</a>
    </div>
    <div className="flex gap-5 items-center">
        <IconBell/>
        <div className="flex items-center gap-2">
             <div>Marshal</div>
              <Avatar src="avatar.png" alt="it's me" />
        </div>
        <IconSettings/>
    </div>    

   </div>
};

export default Header;