import React from 'react';
import { View } from 'react-native';
import { Text } from '../ui';
import { styles } from '../../styles/styles';

/**
 * Custom/TeacherMessage
 * Displays a message from the teacher
 * Uses only UI layer components
 */
export default function TeacherMessage() {
  return (
    <View style={styles.messageBox}>
      <Text style={styles.messageTitle}>Message from Teacher</Text>
      <Text style={styles.messageText}>
        Welcome to the Mobile App Development Midterm Exam!
      </Text>
      <Text style={styles.messageText}>
        Complete all tasks carefully and good luck!
      </Text>
    </View>
  );
}