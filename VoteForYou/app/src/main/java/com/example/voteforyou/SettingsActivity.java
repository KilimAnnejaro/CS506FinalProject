package com.example.voteforyou;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextClock;
import android.widget.TextView;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class SettingsActivity extends AppCompatActivity {

    //activity elements
    private Button signOutButton, resultsButton, rankingButton;
    private TextView currentUser;

    //Firebase Authentication object
    private FirebaseAuth mAuth;

    //exection starts here
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        //default
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_settings);

        //initialize activity elements
        signOutButton = (Button) findViewById(R.id.button_sign_out);
        currentUser = (TextView) findViewById(R.id.currentUserText);
        resultsButton = (Button) findViewById(R.id.button_results);
        rankingButton = (Button) findViewById(R.id.button_ranking);


        //Get Firebase authentication instance
        mAuth = FirebaseAuth.getInstance();

        //Set the users name- A basic model for how to get user data in general
        setUserName();

        //sign out - go to first page
        signOutButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                //Sign the user out
                mAuth.signOut();

                //Direct user to ranking page
                Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(intent);
            }
        });

        //results button - open activity
        resultsButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Direct user to review page
                Intent intent = new Intent(getApplicationContext(), ReviewActivity.class);
                startActivity(intent);
            }
        });

        //ranking button - open activity
        rankingButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Direct user to ranking page
                Intent intent = new Intent(getApplicationContext(), RankingActivity.class);
                startActivity(intent);
            }
        });
    }

    //obtain the current user's name and display it
    private void setUserName(){
        String UID = mAuth.getCurrentUser().getUid();
        DatabaseReference dbRef = FirebaseDatabase.getInstance().getReference("Users").child(UID);
        dbRef.addListenerForSingleValueEvent(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                User user = dataSnapshot.getValue(User.class);
                currentUser.setText(user.name);
            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });
    }
}
