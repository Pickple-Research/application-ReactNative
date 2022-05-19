import { assertAccessor } from "@babel/types";
import { RoundTextInput } from "@Component/TextInput";
import { SimpleTextInput } from "@Component/TextInput/SimpleTextInput.component";
import { vw } from "@Theme/size.theme";
import { getGalleryPhotoFromAndroid } from "@Util/Permissions/android.util";
import React, { createContext, useContext, useState } from "react";
import {
  Image,
  ImagePickerIOS,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { ImagePickerResponse } from "react-native-image-picker";
import styled from "styled-components/native";
import { Observer } from "../Research.write.screen";
import {
  Container,
  SectionContainer,
  TitleBoldText,
  TitleContainer,
  TitleNormalText,
} from "../styled";

/**
 * 리서치 작성 페이지 10
 * 숫자가 클 수록 뒤 페이지입니다
 */

/**
 * TODO 제목, 링크, 내용이 변했을 때 이가 적합한 링크인지 확인해주는 함수를 추가하십시오
 * TODO 아래와 같이 동작하도록 SimpleTextInput 이미지를 설정하십시오
 * 링크 적합 -> Image 보임
 * 링크 부적함 -> 이미지 사라짐
 */
function onTitleChange(data: string) {}
function onLinkChange() {}
function onDescriptionChange() {}

const ResearchObserver = createContext({
  title: "",
  link: "",
  description: "",
  setTitle: (title: string) => {},
  setLink: (link: string) => {},
  setDescription: (description: string) => {},
});

/**
 * TODO 버그 수정: completeChecker()가 setText() 보다 늦게 호출됨
 */
export function ResearchWrite10Screen({ navigation }: any) {
  const [title, _setTitle] = useState("");
  const [link, _setLink] = useState("");
  const [description, _setDescription] = useState("");

  function setTitle(title: string) {
    _setTitle(title);
    completeChecker();
  }
  function setLink(link: string) {
    _setLink(link);
    completeChecker();
  }
  function setDescription(description: string) {
    _setDescription(description);
    completeChecker();
  }
  function completeChecker() {
    if (title.length > 0 && link.length > 0 && description.length > 0) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }

  const { isComplete, setIsComplete } = useContext(Observer);

  return (
    <ResearchObserver.Provider
      value={{
        title,
        link,
        description,
        setTitle,
        setLink,
        setDescription,
      }}>
      <Container>
        <ResearchName />
        <ResearchLink />
        <ResearchDescription />
      </Container>
    </ResearchObserver.Provider>
  );
}

function ResearchName() {
  const { setTitle } = useContext(ResearchObserver);
  return (
    <SectionContainer>
      <TitleContainer>
        <TitleBoldText>리서치 제목</TitleBoldText>
        <TitleNormalText>을 입력해주세요</TitleNormalText>
      </TitleContainer>
      <ResearchName__InputView>
        <RoundTextInput
          placeHolder="MZ세대 여성들의 피트니스와 웰니스에 대한 인식 조사"
          dataTransfer={setTitle}
        />
      </ResearchName__InputView>
    </SectionContainer>
  );
}

function ResearchLink() {
  const { setLink } = useContext(ResearchObserver);

  return (
    <SectionContainer>
      <TitleContainer>
        <TitleBoldText>리서치 링크</TitleBoldText>
        <TitleNormalText>를 입력해주세요</TitleNormalText>
      </TitleContainer>
      <ResearchLink__InputView>
        <SimpleTextInput
          placeHolder="https://forms.gle./r2cisthebest123"
          dataTransfer={setLink}
        />
      </ResearchLink__InputView>
    </SectionContainer>
  );
}
function ResearchDescription() {
  const { setDescription } = useContext(ResearchObserver);

  return (
    <SectionContainer>
      <TitleContainer>
        <TitleBoldText>내용</TitleBoldText>
        <TitleNormalText>을 입력해주세요</TitleNormalText>
      </TitleContainer>
      <ResearchDescription__InputView>
        <RoundTextInput
          multiline={true}
          placeHolder={
            "안녕하세요. 스타트업 마케팅 팀에서 일하고 있는 직장인입니다.\n내일 오전에 PT해야 되는 자료에 사용할 데이터가 필요한데 리서치 참여 좀 부탁드릴게요 ㅠ.ㅜ"
          }
          dataTransfer={setDescription}
        />
      </ResearchDescription__InputView>
    </SectionContainer>
  );
}

// ResearchName()
const ResearchName__Container = styled.View``;
const ResearchName__InputView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

// ResearchLink()
const ResearchLink__Container = styled.View``;
const ResearchLink__InputView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

// ResearchDescription()
const ResearchDescription__Container = styled.View``;
const ResearchDescription__InputView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

/**
 * @deprecated
 * 필요 없다고 판단되면 그냥 지워주세용 감사합니다!
 */

//  function Author() {
//     const [textValue, setTextValue] = useState("");

//     function passData(data: string) {
//         console.log(data);
//         setTextValue(data);

//     }
//     return (
//         <Author__Container>
//             <TitleContainer>
//                 <TitleBoldText>실명과 닉네임</TitleBoldText>
//                 <TitleNormalText> 중 선택해 주세요</TitleNormalText>
//             </TitleContainer>
//             <Author__InputView>
//                 <RoundTextInput
//                     fixedText='실명'
//                     containerStyle={{
//                         marginHorizontal: 0,
//                         backgroundColor: "white",
//                         width: 50 * vw - 30,
//                     }}
//                     dataTransfer={passData}
//                 />
//                 <RoundTextInput
//                     fixedText='닉네임'
//                     containerStyle={{
//                         marginHorizontal: 0,
//                         backgroundColor: "white",
//                         width: 50 * vw - 30,
//                     }}
//                     dataTransfer={passData}
//                 />
//             </Author__InputView>
//         </Author__Container>
//     )
// }
// async function getImage() {
//     const result = await getGalleryPhotoFromAndroid()
//     if (result !== undefined) {
//         const resultResponse: ImagePickerResponse = result

//         if (resultResponse.assets !== undefined) {
//             return resultResponse.assets[0].uri
//         }

//     }
//     return undefined
// }
// function Profile() {
//     const [profileImage, setProfileImage] = useState<string | undefined>();
//     return (
//         <View>
//             <TouchableOpacity style={{width: 100, height: 100, }} onPress={() => {
//                 getImage()
//                 .then((data) => {
//                     if (data === undefined) return;
//                     else {
//                         setProfileImage(data);
//                     }
//                 })
//             }}>
//                 <Image width={100} height={100} style={{ width:100, height: 100, borderRadius: 50}} source={profileImage === undefined ? require("@Resource/png/profile-default.png") : {uri: profileImage}} />
//             </TouchableOpacity>
//         </View>
//     )
// }

// function ResearchGroup() {
//     return (
//         <ResearchGroup__Container>
//             <TitleContainer>
//                 <TitleBoldText>리서치 진행하는 단체</TitleBoldText>
//                 <TitleNormalText>가 있다면 입력해주세요 (선택)</TitleNormalText>
//             </TitleContainer>
//             <ResearchGroup__InputView>
//                 <RoundTextInput
//                     placeHolder=''
//                 />
//             </ResearchGroup__InputView>
//         </ResearchGroup__Container>
//     )
// }

// Profile()

// const Profile__Container = styled.View`

// `
// // Name()
// const Author__Container = styled.View`

// `
// const Author__InputView = styled.View`
//     flex-direction: row;
//     justify-content: space-between;
// `

// // ResearchGroup()
// const ResearchGroup__Container = styled.View`

// `

// const ResearchGroup__InputView = styled.View`
//     flex-direction: row;
//     justify-content: space-evenly;
// `
