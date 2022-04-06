import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { HomeScreen } from "../../Screen/Home";
import { ClientStackNavigator, ClientStackScreenProps } from "@Navigator/Client.stack.navigator";
import { CommunityStackNavigator, CommunityStackScreenProps, HomeStackNavigator, HomeStackSreenProps, ProfileStackNavigator, ProfileStackScreenProps, ResearchStackNavigator, ResearchStackScreenProps } from "..";


const AppBottomTab = createBottomTabNavigator<AppBottomTabProps>();

export type AppBottomTabProps = {
  ClientStack: ClientStackScreenProps;
  ResearchStack: ResearchStackScreenProps;
  HomeStack: HomeStackSreenProps;
  CommunityStack: CommunityStackScreenProps;
  ProfileStack: ProfileStackScreenProps;
};

/**
 * 앱 메인 하단바 네비게이터입니다. 사실상 앱 그 자체입니다.
 * 다른 네비게이터가 이 네비게이터를 구성하는 스크린 컴포넌트로 들어옵니다.
 * @author 현웅
 */
export function AppBottomTabNavigator() {
  return (
    <AppBottomTab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <AppBottomTab.Screen
        name={"ClientStack"}
        component={ClientStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Client.image.focused
                    : bottomTabResource.Client.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Client.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>
                  {bottomTabResource.Client.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        }}
      />

      <AppBottomTab.Screen
        name={"ResearchStack"}
        component={ResearchStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Research.image.focused
                    : bottomTabResource.Research.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Research.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>
                  {bottomTabResource.Research.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        }}
      />
      <AppBottomTab.Screen
        name={"HomeStack"}
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabMainIconView>
              <BottomTabMainIconImage
                source={
                  focused
                    ? bottomTabResource.Home.image.focused
                    : bottomTabResource.Home.image.unfocused
                }
              />
            </BottomTabMainIconView>
          ),
        }}
      />
      <AppBottomTab.Screen
        name={"CommunityStack"}
        component={CommunityStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Community.image.focused
                    : bottomTabResource.Community.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Community.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>
                  {bottomTabResource.Community.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        }}
      />
      <AppBottomTab.Screen
        name={"ProfileStack"}
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Profile.image.focused
                    : bottomTabResource.Profile.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Profile.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>
                  {bottomTabResource.Profile.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        }}
      />
    </AppBottomTab.Navigator>
  );
}

const bottomTabResource = {
  Client: {
    label: "스타트업",
    image: {
      unfocused: require("@Resource/png/bottom_tab_client_inactive.png"),
      focused: require("@Resource/png/bottom_tab_client_active.png"),
    },
  },
  Research: {
    label: "리서치",
    image: {
      unfocused: require("@Resource/png/bottom_tab_research_inactive.png"),
      focused: require("@Resource/png/bottom_tab_research_active.png"),
    },
  },
  Home: {
    label: "",
    image: {
      unfocused: require("@Resource/png/bottom_tab_home_inactive.png"),
      focused: require("@Resource/png/bottom_tab_home_active.png"),
    },
  },
  Community: {
    label: "커뮤니티",
    image: {
      unfocused: require("@Resource/png/bottom_tab_community_inactive.png"),
      focused: require("@Resource/png/bottom_tab_community_active.png"),
    },
  },
  Profile: {
    label: "마이페이지",
    image: {
      unfocused: require("@Resource/png/bottom_tab_profile_inactive.png"),
      focused: require("@Resource/png/bottom_tab_profile_active.png"),
    },
  },
};

const BottomTabIconView = styled.View`
  align-items: center;
  margin-top: 12px;
`;

const BottomTabIconImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const BottomTabIconUnfocusedText = styled.Text`
  color: black;
  font-size: 10px;
`;

const BottomTabIconFocusedText = styled(BottomTabIconUnfocusedText)`
  color: red;
`;

const BottomTabMainIconView = styled.View`
  align-items: center;
  margin-bottom: 45px;
`;

const BottomTabMainIconImage = styled.Image`
  width: 78px;
  height: 78px;
`;
