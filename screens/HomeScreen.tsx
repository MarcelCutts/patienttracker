import * as React from "react";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet, View } from "react-native";
import { WithNamespaces } from "react-i18next";
import { FAB, Button } from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { UserCard } from "../components/UserCard";
import { PatientsCard } from "../components/PatientsCard";
import { Patient, Store, User } from "../types";
import { connect } from "react-redux";
import { clearUser, editPatient } from "../state/actions";
import Header from "../components/Header";
import { PatientList } from "../components/PatientList";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  user: User;
  clearUser: () => void;
  patients: Array<Patient>;
  editPatient: (patient: Patient) => void;
}

class HomeScreen extends React.Component<Props & WithNamespaces> {
  static navigationOptions = {
    header: props => <Header {...props} />
  };

  updateUser = async () => {
    this.props.clearUser();
    this.props.navigation.navigate("UserSignIn");
  };

  render() {
    const { navigation, user, patients, editPatient } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <UserCard user={user} updateUser={this.updateUser} />
        </View>
        <PatientList patients={patients} editPatient={editPatient} />

        <FAB
          style={styles.fab}
          icon="camera-alt"
          onPress={() => navigation.navigate("Qr")}
        />
      </View>
    );
  }
}
const mapStateToProps = (state: Store) => ({
  user: state.user,
  patients: state.patients
});

const mapDispatchToProps = dispatch => ({
  clearUser: () => dispatch(clearUser()),
  editPatient: (patient: Patient) => dispatch(editPatient(patient))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  user: {
    margin: 16
  },
  fab: {
    position: "absolute",
    margin: 24,
    right: 0,
    bottom: 0
  }
});
