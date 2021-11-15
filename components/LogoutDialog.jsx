import React from "react";
import { AlertDialog, Button } from "native-base";

export default function LogoutDialog({ isOpen, onClose, navigation }) {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Log Out</AlertDialog.Header>
        <AlertDialog.Body>Are you sure you want to log out?</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button.Group space={2}>
            <Button variant="solid" colorScheme="coolGray" onPress={onClose}>
              Cancel
            </Button>
            <Button colorScheme="danger" onPress={() => navigation.popToTop()}>
              Log Out
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
