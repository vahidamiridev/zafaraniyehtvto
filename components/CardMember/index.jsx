import Image from "next/image";

const CardMember = ({ member }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="team-member bg-white shadow-sm">
        <Image
          src={member.src}
          alt="عضو اول"
          className="member-img"
          width={360}
          height={310}
          style={{ width: '100%', height: 'auto' }}
        />
        <div className="member-info">
          <h5 className="mb-1"> {member.name}</h5>
          <p className="text-muted mb-0"> {member.job}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMember;
