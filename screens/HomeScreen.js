import * as React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { UserCard } from "../components/UserCard";
import { connect } from "react-redux";
import { clearUser, editPatient } from "../state/actions";
import Header from "../components/Header";
import { PatientList } from "../components/PatientList";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: (props) => <Header {...props} />,
  };

  updateUser = async () => {
    this.props.clearUser();
    this.props.navigation.navigate("UserSignIn");
  };

  render() {
    const { navigation, user, patients, editPatient, oldPatients } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <UserCard user={user} updateUser={this.updateUser} />
        </View>
        <PatientList patients={patients} editPatient={editPatient} />
        <PatientList patients={oldPatients} editPatient={editPatient} />

        <FAB
          style={styles.fab}
          icon="camera-alt"
          onPress={() => navigation.navigate("Qr")}
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  oldPatients: state.patients,
  patients: state.patients.queue,
});

const mapDispatchToProps = (dispatch) => ({
  clearUser: () => dispatch(clearUser()),
  editPatient: (patient) => dispatch(editPatient(patient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  user: {
    margin: 16,
  },
  fab: {
    position: "absolute",
    margin: 24,
    right: 0,
    bottom: 0,
  },
});
