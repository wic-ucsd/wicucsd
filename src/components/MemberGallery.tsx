import MemberPopUp from "@/components/MemberPopUp";
import { Member } from '@/types/index';
import { Key } from "react";

type MemberGalleryProps = {
  members: Member[];
};

export default function MemberGallery({ members }: MemberGalleryProps) {

  return (
   <div className="
      grid
      grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-md
      place-items-center items-start
      "
    >
      {members.map((member, index: Key | null | undefined) => (
        <div className="" key={index}>
           <MemberPopUp key={index} member={member}/>
        </div>
      ))}
   </div>
  );
}