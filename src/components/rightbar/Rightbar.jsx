import "./rightbar.css"
import Online from "../online/Online";
import { Users } from "../../dummyData";
import Friend from "../friend/Friend";

export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Abdul Razzaq</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online
                            key={u.id}
                            user={u}
                        />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">
                            City:
                        </span>
                        <span className="rightbarInfoValue">
                            New Delhi
                        </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">
                            From:
                        </span>
                        <span className="rightbarInfoValue">
                            Rampur
                        </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">
                            College:
                        </span>
                        <span className="rightbarInfoValue">
                            Aligarh Muslim University
                        </span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User Friends</h4>
                <>
                    {Users.map((u) => (
                        <Friend
                            key={u.id}
                            user={u}
                        />
                    ))}
                </>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
