import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const styles = StyleSheet.create({
  inputGroup: {
    padding: 5,
    gap: 10,
  },
  text: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 18,
  },
});

interface IProps {
  title?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  value: any;
  setValue: (v: any) => void;
}

const ShareInput = (props: IProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const {
    title,
    keyboardType,
    secureTextEntry = false,
    value,
    setValue,
  } = props;
  return (
    <View style={styles.inputGroup}>
      {title && <Text style={styles.text}>{title}</Text>}
      <View>
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          keyboardType={keyboardType}
          style={[
            styles.textInput,
            { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GRAY },
          ]}
          secureTextEntry={secureTextEntry && !isShowPass}
        />
        {secureTextEntry && (
          <Ionicons
            onPress={() => setIsShowPass(!isShowPass)}
            style={styles.eyeIcon}
            name={isShowPass ? "eye-outline" : "eye-off-outline"}
            size={18}
            color="black"
          />
        )}
      </View>
    </View>
  );
};

export default ShareInput;
