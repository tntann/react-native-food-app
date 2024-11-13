import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
    paddingHorizontal: 7,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

interface IProps {
  title?: string;
  keyboardType?: KeyboardTypeOptions;
}

const ShareInput = (props: IProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { title, keyboardType } = props;
  return (
    <View style={styles.inputGroup}>
      {title && <Text style={styles.text}>{title}</Text>}
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        keyboardType={keyboardType}
        style={[
          styles.textInput,
          { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GRAY },
        ]}
      />
    </View>
  );
};

export default ShareInput;
