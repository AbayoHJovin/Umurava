import Image from "next/image";

export default function ChallengeComponent({challenge}){
    return (
        <div>
        <Image src={challenge.challengeImage} alt={challenge.challengeImage} width={100} height={100}/>
        </div>
    )
}