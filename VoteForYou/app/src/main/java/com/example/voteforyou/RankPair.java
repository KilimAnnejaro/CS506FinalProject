package com.example.voteforyou;

import java.util.Comparator;

//represents a candidate and their ranking as assigned by user. implemented for
//encapsulation and comparing

public class RankPair implements Comparator<RankPair>{

    //has name and val
    private String candidateName;
    private int rankingValue;

    public RankPair(){

    }

    //constructor
    public RankPair(String candidateName, int rankingValue) {
        this.candidateName = candidateName;
        this.rankingValue = rankingValue;
    }

    //accessor methods
    public String getCandidateName(){
        return this.candidateName;
    }

    public int getRanking(){
        return this.rankingValue;
    }


    //implementation of compare - return 1 if first object's rank is greater
    //0 if equal
    //-1 if second is greater
    public int compare(RankPair obj1, RankPair obj2) {
        int rank1, rank2;

        rank1 = obj1.getRanking();
        rank2 = obj2.getRanking();

        if (rank1 > rank2) {
            return 1;
        } else if (rank1 < rank2){
            return -1;
        } else {
            return 0;
        }
    }

    @Override
    public String toString(){
        return getCandidateName() + ":  " + getRanking();
    }

}
