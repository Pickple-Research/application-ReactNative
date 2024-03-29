/**
 * 서버와 공유하는 스키마 타입. 보안상 일부 데이터 필드는 다를 수 있습니다.
 * @author 현웅
 */
export * from "./Partner/partner.schema";
export * from "./Partner/partnerPost.schema";
export * from "./Partner/partnerProduct.schema";
export * from "./Partner/partnerActivity.schema";

export * from "./Research/research.schema";
export * from "./Research/researchComment.schema";
export * from "./Research/researchReply.schema";

export * from "./User/creditHistory.schema";
export * from "./User/user.schema";
export * from "./User/userNotice.schema";
export * from "./User/userPrivacy.schema";
export * from "./User/userProperty.schema";
export * from "./User/userResearch.schema";
export * from "./User/userVote.schema";
export * from "./User/Embedded";

export * from "./Vote/vote.schema";
export * from "./Vote/voteComment.schema";
export * from "./Vote/voteOption.schema";
export * from "./Vote/voteReply.schema";
