// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
      8: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v151 = stdlib.protect(ctc0, await interact.vaultDeposit(), {
    at: './index.rsh:28:53:application',
    fs: ['at ./index.rsh:27:13:application call to [unknown function] (defined at: ./index.rsh:27:17:function exp)'],
    msg: 'vaultDeposit',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v151],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:31:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v153], secs: v155, time: v154, didSend: v27, from: v152 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v153], secs: v155, time: v154, didSend: v27, from: v152 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v152, v153],
    evt_cnt: 0,
    funcNum: 1,
    lct: v154,
    onlyIf: true,
    out_tys: [],
    pay: [v153, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v158, time: v157, didSend: v34, from: v156 } = txn2;
      
      sim_r.txns.push({
        amt: v153,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v158, time: v157, didSend: v34, from: v156 } = txn2;
  ;
  const v161 = stdlib.addressEq(v152, v156);
  stdlib.assert(v161, {
    at: './index.rsh:33:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v166], secs: v168, time: v167, didSend: v43, from: v165 } = txn3;
  ;
  const v170 = stdlib.add(v157, stdlib.checkedBigNumberify('./index.rsh:40:20:decimal', stdlib.UInt_max, '3'));
  let v171 = false;
  let v172 = v167;
  let v173 = v157;
  let v179 = v153;
  
  while (await (async () => {
    const v183 = stdlib.le(v173, v170);
    
    return v183;})()) {
    const v190 = stdlib.add(v172, v170);
    const v194 = stdlib.protect(ctc1, await interact.aliceState(), {
      at: './index.rsh:49:55:application',
      fs: ['at ./index.rsh:48:15:application call to [unknown function] (defined at: ./index.rsh:48:19:function exp)'],
      msg: 'aliceState',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v152, v153, v165, v170, v179, v190, v194],
      evt_cnt: 1,
      funcNum: 4,
      lct: v172,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:51:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v196], secs: v198, time: v197, didSend: v62, from: v195 } = txn4;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v190],
      tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v152, v153, v165, v170, v179, v190],
        evt_cnt: 0,
        funcNum: 5,
        lct: v172,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v206, time: v205, didSend: v87, from: v204 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v165,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v206, time: v205, didSend: v87, from: v204 } = txn5;
      ;
      const v207 = stdlib.addressEq(v152, v204);
      const v208 = stdlib.addressEq(v165, v204);
      const v209 = v207 ? true : v208;
      stdlib.assert(v209, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:52:48:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:23:29:application',
        fs: ['at ./index.rsh:22:9:application call to [unknown function] (defined at: ./index.rsh:22:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:21:28:function exp)', 'at ./index.rsh:52:48:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v196], secs: v198, time: v197, didSend: v62, from: v195 } = txn4;
      ;
      const v199 = stdlib.addressEq(v152, v195);
      stdlib.assert(v199, {
        at: './index.rsh:51:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 6,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v202, time: v201, didSend: v67, from: v200 } = txn5;
      ;
      const v203 = stdlib.addressEq(v165, v200);
      stdlib.assert(v203, {
        at: './index.rsh:54:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const cv171 = v196;
      const cv172 = v201;
      const cv173 = v197;
      const cv179 = v179;
      
      v171 = cv171;
      v172 = cv172;
      v173 = cv173;
      v179 = cv179;
      
      continue;
      
      }
    
    }
  const v223 = stdlib.ge(v173, v170);
  const v224 = v223 ? v171 : false;
  if (v224) {
    const v228 = stdlib.sub(v179, v153);
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(true), {
      at: './index.rsh:61:26:application',
      fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    ;
    return;
    }
  else {
    const v243 = stdlib.sub(v179, v153);
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(false), {
      at: './index.rsh:67:26:application',
      fs: ['at ./index.rsh:66:9:application call to [unknown function] (defined at: ./index.rsh:66:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    ;
    return;
    }
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v153], secs: v155, time: v154, didSend: v27, from: v152 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v158, time: v157, didSend: v34, from: v156 } = txn2;
  ;
  const v161 = stdlib.addressEq(v152, v156);
  stdlib.assert(v161, {
    at: './index.rsh:33:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v164 = stdlib.protect(ctc1, await interact.acceptTerms(v153), {
    at: './index.rsh:37:58:application',
    fs: ['at ./index.rsh:36:11:application call to [unknown function] (defined at: ./index.rsh:36:15:function exp)'],
    msg: 'acceptTerms',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v152, v153, v157, v164],
    evt_cnt: 1,
    funcNum: 2,
    lct: v157,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v166], secs: v168, time: v167, didSend: v43, from: v165 } = txn3;
      
      ;
      const v170 = stdlib.add(v157, stdlib.checkedBigNumberify('./index.rsh:40:20:decimal', stdlib.UInt_max, '3'));
      const v171 = false;
      const v172 = v167;
      const v173 = v157;
      const v179 = v153;
      
      if (await (async () => {
        const v183 = stdlib.le(v173, v170);
        
        return v183;})()) {
        const v190 = stdlib.add(v172, v170);
        sim_r.isHalt = false;
        }
      else {
        const v223 = stdlib.ge(v173, v170);
        const v224 = v223 ? v171 : false;
        if (v224) {
          const v228 = stdlib.sub(v179, v153);
          sim_r.txns.push({
            kind: 'from',
            to: v152,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'from',
            to: v152,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v243 = stdlib.sub(v179, v153);
          sim_r.txns.push({
            kind: 'from',
            to: v165,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'from',
            to: v152,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v166], secs: v168, time: v167, didSend: v43, from: v165 } = txn3;
  ;
  const v170 = stdlib.add(v157, stdlib.checkedBigNumberify('./index.rsh:40:20:decimal', stdlib.UInt_max, '3'));
  let v171 = false;
  let v172 = v167;
  let v173 = v157;
  let v179 = v153;
  
  while (await (async () => {
    const v183 = stdlib.le(v173, v170);
    
    return v183;})()) {
    const v190 = stdlib.add(v172, v170);
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: ['time', v190],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v152, v153, v165, v170, v179, v190],
        evt_cnt: 0,
        funcNum: 5,
        lct: v172,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v206, time: v205, didSend: v87, from: v204 } = txn5;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v165,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v206, time: v205, didSend: v87, from: v204 } = txn5;
      ;
      const v207 = stdlib.addressEq(v152, v204);
      const v208 = stdlib.addressEq(v165, v204);
      const v209 = v207 ? true : v208;
      stdlib.assert(v209, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:52:48:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:23:29:application',
        fs: ['at ./index.rsh:22:9:application call to [unknown function] (defined at: ./index.rsh:22:27:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:21:28:function exp)', 'at ./index.rsh:52:48:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v196], secs: v198, time: v197, didSend: v62, from: v195 } = txn4;
      ;
      const v199 = stdlib.addressEq(v152, v195);
      stdlib.assert(v199, {
        at: './index.rsh:51:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const txn5 = await (ctc.sendrecv({
        args: [v152, v153, v165, v170, v179, v196, v197],
        evt_cnt: 0,
        funcNum: 6,
        lct: v197,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:54:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v202, time: v201, didSend: v67, from: v200 } = txn5;
          
          ;
          const cv171 = v196;
          const cv172 = v201;
          const cv173 = v197;
          const cv179 = v179;
          
          await (async () => {
            const v171 = cv171;
            const v172 = cv172;
            const v173 = cv173;
            const v179 = cv179;
            
            if (await (async () => {
              const v183 = stdlib.le(v173, v170);
              
              return v183;})()) {
              const v190 = stdlib.add(v172, v170);
              sim_r.isHalt = false;
              }
            else {
              const v223 = stdlib.ge(v173, v170);
              const v224 = v223 ? v171 : false;
              if (v224) {
                const v228 = stdlib.sub(v179, v153);
                sim_r.txns.push({
                  kind: 'from',
                  to: v152,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'from',
                  to: v152,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                const v243 = stdlib.sub(v179, v153);
                sim_r.txns.push({
                  kind: 'from',
                  to: v165,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'from',
                  to: v152,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc1, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v202, time: v201, didSend: v67, from: v200 } = txn5;
      ;
      const v203 = stdlib.addressEq(v165, v200);
      stdlib.assert(v203, {
        at: './index.rsh:54:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const cv171 = v196;
      const cv172 = v201;
      const cv173 = v197;
      const cv179 = v179;
      
      v171 = cv171;
      v172 = cv172;
      v173 = cv173;
      v179 = cv179;
      
      continue;
      
      }
    
    }
  const v223 = stdlib.ge(v173, v170);
  const v224 = v223 ? v171 : false;
  if (v224) {
    const v228 = stdlib.sub(v179, v153);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(true), {
      at: './index.rsh:61:26:application',
      fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    ;
    return;
    }
  else {
    const v243 = stdlib.sub(v179, v153);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(false), {
      at: './index.rsh:67:26:application',
      fs: ['at ./index.rsh:66:9:application call to [unknown function] (defined at: ./index.rsh:66:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    ;
    return;
    }
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAKAAEGAiAIUAVIWCYCAQAAIjUAMRhBAzkpZEkiWzUBIQVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEEDEABMkkhBwxAAKdJJAxAAFEkEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf+ABGG0rAywNP8xABJENANXACA0AyEEWzT/NAMhCFs0A1dYARcyBjQDgVlbNAMhBltCAb9IJDQBEkQ0BEkiEkw0AhIRRChkSTUDVyggNf+ABMyZklywMgY0AyEJWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQZbsggjshA0/7IHs0ICDEgkNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+VyggNf0hCFs1/CEGWzX7STUFFzX6gATu5+giNPoWUQcIULAyBjQDIQlbDEQ0/zEAEkQ0/zT+FlA0/VA0/BZQNPsWUDT6FlEHCFAyBhZQKEsBVwBhZ0ghBTUBMgY1AkIBpEkjDEAApEklDEAATyUSRCU0ARJENARJIhJMNAISEUQoZEk1A0khBFs1/4EoWzX+STUFFzX9gARqEToINP0WUQcIULA0A1cAIDT/MQA0/oEDCCIyBjT+NP9CAJBIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf6ABJqLkXSwNP6IAW00/zEAEkQ0/zT+FlAyBhZQKEsBVwAwZ0glNQEyBjUCQgD6SIGgjQaIAUMiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAxADT/FlAoSwFXAChnSCM1ATIGNQJCALk1/zX+Nf01/DX7Nfo1+TX4NP40+w5BAC40/TT7CDX3NPg0+RZQNPpQNPsWUDT/FlA09xZQKEsBVwBgZ0gkNQEyBjUCQgBzNP40+w80/BBBACaxIrIBNPmyCCOyEDT4sgezsSKyATT/NPkJsggjshA0+LIHs0IAJrEisgE0+bIII7IQNPqyB7OxIrIBNP80+QmyCCOyEDT4sgezQgAAMRkhBxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v166",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v196",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v166",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v196",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001510380380620015108339810160408190526200002691620001b8565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000e8565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000df926002929091019062000112565b50505062000297565b816200010e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000120906200025a565b90600052602060002090601f0160209004810192826200014457600085556200018f565b82601f106200015f57805160ff19168380011785556200018f565b828001600101855582156200018f579182015b828111156200018f57825182559160200191906001019062000172565b506200019d929150620001a1565b5090565b5b808211156200019d5760008155600101620001a2565b6000818303604080821215620001cd57600080fd5b80518082016001600160401b038082118383101715620001fd57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021757600080fd5b8351945060208501915084821081831117156200024457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026f57607f821691505b602082108114156200029157634e487b7160e01b600052602260045260246000fd5b50919050565b61126980620002a76000396000f3fe6080604052600436106100795760003560e01c80638e3147691161004b5780638e314769146100e1578063a98bf223146100f4578063ab53f2c614610107578063c79800371461012a57005b80631e93b0f1146100825780632c10a159146100a65780633e59bac4146100b957806383230757146100cc57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b6100806100b4366004610e70565b61013d565b6100806100c7366004610e70565b610310565b3480156100d857600080fd5b50600154610093565b6100806100ef366004610e70565b6104a2565b610080610102366004610e70565b610658565b34801561011357600080fd5b5061011c6108ad565b60405161009d929190610e93565b610080610138366004610e70565b61094a565b61014d600160005414600a610af4565b6101678135158061016057506001548235145b600b610af4565b60008080556002805461017990610ef0565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590610ef0565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a9190610f41565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161023d929190610fb4565b60405180910390a1610256816020015134146008610af4565b805161026e906001600160a01b031633146009610af4565b61029b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b03168082526020808401518184019081524360408086018281526002600055600192909255805193840194909452905192820192909252905160608201526080015b6040516020818303038152906040526002908051906020019061030a929190610d20565b50505050565b610320600260005414600d610af4565b61033a8135158061033357506001548235145b600e610af4565b60008080556002805461034c90610ef0565b80601f016020809104026020016040519081016040528092919081815260200182805461037890610ef0565b80156103c55780601f1061039a576101008083540402835291602001916103c5565b820191906000526020600020905b8154815290600101906020018083116103a857829003601f168201915b50505050508060200190518101906103dd9190610fec565b90507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd338360405161041092919061107a565b60405180910390a16104243415600c610af4565b61042c610da4565b815181516001600160a01b039091169052602080830151825190910152805133604091820152820151610461906003906110ad565b81516060908101919091526020808301805160009052805143908301526040808601518251909101529084015190519091015261049d81610b19565b505050565b6104b26006600054146016610af4565b6104cc813515806104c557506001548235145b6017610af4565b6000808055600280546104de90610ef0565b80601f016020809104026020016040519081016040528092919081815260200182805461050a90610ef0565b80156105575780601f1061052c57610100808354040283529160200191610557565b820191906000526020600020905b81548152906001019060200180831161053a57829003601f168201915b505050505080602001905181019061056f91906110c5565b90506105838160a001514310156018610af4565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516105b4929190610fb4565b60405180910390a16105c834156014610af4565b80516105fc906001600160a01b031633146105f25760408201516001600160a01b031633146105f5565b60015b6015610af4565b80604001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561063d573d6000803e3d6000fd5b506000808055600181905561065490600290610e06565b5050565b6106686006600054146011610af4565b6106828135158061067b57506001548235145b6012610af4565b60008080556002805461069490610ef0565b80601f01602080910402602001604051908101604052809291908181526020018280546106c090610ef0565b801561070d5780601f106106e25761010080835404028352916020019161070d565b820191906000526020600020905b8154815290600101906020018083116106f057829003601f168201915b505050505080602001905181019061072591906110c5565b90506107388160a0015143106013610af4565b7f8d528f5e4eb7cb4d65f9857aba0fd34b00701475a124b40508c8832153576b94338360405161076992919061107a565b60405180910390a161077d3415600f610af4565b8051610795906001600160a01b031633146010610af4565b6107e96040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600015158152602001600081525090565b81516001600160a01b03908116825260208084015181840152604080850151909216828401526060808501519084015260808085015190840152610831918501908501611159565b151560a08201524360c0820181905260086000556001556040516102e690829060200181516001600160a01b0390811682526020808401519083015260408084015190911690820152606080830151908201526080808301519082015260a08281015115159082015260c0918201519181019190915260e00190565b6000606060005460028080546108c290610ef0565b80601f01602080910402602001604051908101604052809291908181526020018280546108ee90610ef0565b801561093b5780601f106109105761010080835404028352916020019161093b565b820191906000526020600020905b81548152906001019060200180831161091e57829003601f168201915b50505050509050915091509091565b61095a600860005414601b610af4565b6109748135158061096d57506001548235145b601c610af4565b60008080556002805461098690610ef0565b80601f01602080910402602001604051908101604052809291908181526020018280546109b290610ef0565b80156109ff5780601f106109d4576101008083540402835291602001916109ff565b820191906000526020600020905b8154815290600101906020018083116109e257829003601f168201915b5050505050806020019051810190610a179190611176565b90507fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610a4a929190610fb4565b60405180910390a1610a5e34156019610af4565b6040810151610a79906001600160a01b03163314601a610af4565b610a81610da4565b815181516001600160a01b03918216905260208084015183518201526040808501518451931692810192909252606080850151845182015260a0850151828501805191151590915280514393019290925260c0850151825190930192909252608084015190519091015261049d81610b19565b816106545760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815281516060015160208301516040015111610c20578151606001516020808401510151610b5491906110ad565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015185168187019081528851606090810151818901908152858b01518201516080808b019182528b5160a0808d019182526006600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e0016102e6565b8151606001516020830151604001511015610c3c576000610c43565b6020820151515b15610cdd57815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c88573d6000803e3d6000fd5b508151805160209182015191840151606001516001600160a01b03909116916108fc91610cb5919061121c565b6040518115909202916000818181858888f1935050505015801561063d573d6000803e3d6000fd5b815160408082015160209092015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610c88573d6000803e3d6000fd5b828054610d2c90610ef0565b90600052602060002090601f016020900481019282610d4e5760008555610d94565b82601f10610d6757805160ff1916838001178555610d94565b82800160010185558215610d94579182015b82811115610d94578251825591602001919060010190610d79565b50610da0929150610e43565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081908152602001610e0160405180608001604052806000151581526020016000815260200160008152602001600081525090565b905290565b508054610e1290610ef0565b6000825580601f10610e22575050565b601f016020900490600052602060002090810190610e409190610e43565b50565b5b80821115610da05760008155600101610e44565b600060408284031215610e6a57600080fd5b50919050565b600060408284031215610e8257600080fd5b610e8c8383610e58565b9392505050565b82815260006020604081840152835180604085015260005b81811015610ec757858101830151858201606001528201610eab565b81811115610ed9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610f0457607f821691505b60208210811415610e6a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f3c57600080fd5b919050565b600060408284031215610f5357600080fd5b6040516040810181811067ffffffffffffffff82111715610f8457634e487b7160e01b600052604160045260246000fd5b604052610f9083610f25565b8152602083015160208201528091505092915050565b8015158114610e4057600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610fdc81610fa6565b8015156040840152509392505050565b600060608284031215610ffe57600080fd5b6040516060810181811067ffffffffffffffff8211171561102f57634e487b7160e01b600052604160045260246000fd5b60405261103b83610f25565b815260208301516020820152604083015160408201528091505092915050565b80358252602081013561106d81610fa6565b8015156020840152505050565b6001600160a01b038316815260608101610e8c602083018461105b565b634e487b7160e01b600052601160045260246000fd5b600082198211156110c0576110c0611097565b500190565b600060c082840312156110d757600080fd5b60405160c0810181811067ffffffffffffffff8211171561110857634e487b7160e01b600052604160045260246000fd5b60405261111483610f25565b81526020830151602082015261112c60408401610f25565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60006020828403121561116b57600080fd5b8135610e8c81610fa6565b600060e0828403121561118857600080fd5b60405160e0810181811067ffffffffffffffff821117156111b957634e487b7160e01b600052604160045260246000fd5b6040526111c583610f25565b8152602083015160208201526111dd60408401610f25565b6040820152606083015160608201526080830151608082015260a083015161120481610fa6565b60a082015260c0928301519281019290925250919050565b60008282101561122e5761122e611097565b50039056fea26469706673582212204757234ac9758ee6439790338f227860dfd4dc37301ddac7471a39fd740fe51864736f6c634300080c0033`,
  BytecodeLen: 5392,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:32:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:71:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:71:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:46:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:52:48:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:53:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
