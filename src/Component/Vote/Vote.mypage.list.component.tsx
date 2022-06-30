import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { VoteMypageListItem } from "src/Component/Vote";
import { RadiusButton } from "src/Component/Button";
import { H1 } from "src/StyledComponents/Text";
import { VoteSchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useMypageParticipatedScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 마이페이지 - 스크랩/참여/업로드한 투표 리스트입니다.
 * @author 현웅
 */
export function MypageVoteList({ votes }: { votes: VoteSchema }) {}
