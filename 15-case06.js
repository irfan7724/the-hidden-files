
/* =========================================
   THE HIDDEN FILES
   CASE 06 — THE BANK TRAIL
   FULL SCREEN + SCROLL FIX
   ========================================= */

(function () {
    "use strict";

    const CASE_ID = "06";
    const SAVE_PREFIX = "thf_case06_bank_v1_";

    const TRANSACTIONS = [
        {
            id: "cheque",
            amount: 8000,
            answer: "bank_minus",
            en: {
                title: "Unpresented Cheque",
                detail: "Meridian issued a cheque for RM8,000. The payment was recorded in the Cash Book, but the cheque has not cleared the bank.",
                explanation: "Deduct RM8,000 from the Bank Statement balance. The payment is already in the Cash Book."
            },
            ms: {
                title: "Cek Belum Dikemukakan",
                detail: "Meridian mengeluarkan cek RM8,000. Pembayaran sudah direkodkan dalam Cash Book tetapi belum dijelaskan oleh bank.",
                explanation: "Tolak RM8,000 daripada baki Bank Statement. Pembayaran sudah direkodkan dalam Cash Book."
            }
        },
        {
            id: "deposit",
            amount: 5000,
            answer: "bank_plus",
            en: {
                title: "Deposit in Transit",
                detail: "A RM5,000 deposit was recorded in the Cash Book on 31 December 2025 but appeared in the bank on 2 January 2026.",
                explanation: "Add RM5,000 to the Bank Statement balance because the bank has not yet credited the deposit."
            },
            ms: {
                title: "Deposit Dalam Perjalanan",
                detail: "Deposit RM5,000 direkodkan dalam Cash Book pada 31 Disember 2025 tetapi hanya muncul dalam bank pada 2 Januari 2026.",
                explanation: "Tambah RM5,000 kepada baki Bank Statement kerana bank belum mengkreditkan deposit tersebut."
            }
        },
        {
            id: "interest",
            amount: 10000,
            answer: "cash_plus",
            en: {
                title: "Bank Interest Received",
                detail: "The bank credited RM10,000 interest. The amount is shown in the Bank Statement but is missing from the Cash Book.",
                explanation: "Add RM10,000 to the Cash Book and recognise interest income."
            },
            ms: {
                title: "Faedah Bank Diterima",
                detail: "Bank mengkreditkan faedah RM10,000. Amaun muncul dalam Bank Statement tetapi belum direkodkan dalam Cash Book.",
                explanation: "Tambah RM10,000 kepada Cash Book dan rekodkan pendapatan faedah."
            }
        },
        {
            id: "charges",
            amount: 2000,
            answer: "cash_minus",
            en: {
                title: "Bank Service Charges",
                detail: "The bank deducted RM2,000 in service charges. The charges are shown in the Bank Statement but are missing from the Cash Book.",
                explanation: "Deduct RM2,000 from the Cash Book and recognise bank charges expense."
            },
            ms: {
                title: "Caj Perkhidmatan Bank",
                detail: "Bank menolak caj perkhidmatan RM2,000. Caj muncul dalam Bank Statement tetapi belum direkodkan dalam Cash Book.",
                explanation: "Tolak RM2,000 daripada Cash Book dan rekodkan belanja caj bank."
            }
        }
    ];

    const OPTIONS = [
        {
            id: "bank_plus",
            en: "Add to Bank Statement",
            ms: "Tambah pada Bank Statement"
        },
        {
            id: "bank_minus",
            en: "Deduct from Bank Statement",
            ms: "Tolak daripada Bank Statement"
        },
        {
            id: "cash_plus",
            en: "Add to Cash Book",
            ms: "Tambah pada Cash Book"
        },
        {
            id: "cash_minus",
            en: "Deduct from Cash Book",
            ms: "Tolak daripada Cash Book"
        }
    ];

    const TEXT = {
        en: {
            title: "THE BANK TRAIL",
            subtitle: "Follow the money. Reconcile the records.",
            label: "CASE FILE 06 / FINANCIAL INVESTIGATION",
            exit: "EXIT CASE",
            start: "BEGIN INVESTIGATION",
            evidence: "VIEW EVIDENCE",
            hint: "USE HINT",
            hints: "Hints",
            lives: "Lives",
            stage: "Stage",
            next: "NEXT TRANSACTION",
            verify: "VERIFY ANSWER",
            verifyFinal: "VERIFY RECONCILIATION",
            submit: "SUBMIT CASE REPORT",
            back: "BACK TO CASE FILES",
            introTitle: "A discrepancy in the bank records",
            intro1: "Detective Alya Rahman receives two financial records from Meridian Corporation. The balances do not agree as at 31 December 2025.",
            intro2: "Management claims the differences are only timing issues. Alya suspects that some transactions require adjustments to the company's records.",
            intro3: "Investigate four transactions, then calculate the correct reconciled balance.",
            bank: "Bank Statement Balance",
            cash: "Cash Book Balance",
            transaction: "TRANSACTION",
            choose: "Choose the correct accounting treatment.",
            chooseFirst: "Please select an answer first.",
            correct: "Correct! The transaction has been classified.",
            wrong: "Incorrect. Review the evidence and try again.",
            revealed: "The correct answer has been revealed.",
            finalTitle: "Final Reconciliation Challenge",
            finalIntro: "Calculate the adjusted balances. Enter whole numbers without RM or commas.",
            adjustedBank: "Adjusted Bank Statement (RM)",
            adjustedCash: "Adjusted Cash Book (RM)",
            finalCorrect: "Correct! Both balances reconcile to RM108,000.",
            finalWrong: "The balances are incorrect. Check your calculations.",
            finalReveal: "Correct answer: RM108,000 for both balances.",
            reportTitle: "CASE REPORT — THE BANK TRAIL",
            reportIntro: "Investigation completed. The accounting differences have been identified.",
            conclusion: "Investigation Conclusion",
            conclusionText: "The Bank Statement and Cash Book both reconcile to RM108,000. The unpresented cheque and deposit in transit are timing differences. Bank interest and service charges require Cash Book adjustments. The original discrepancy alone does not prove fraud.",
            findings: "Transaction Findings",
            journals: "Required Journal Entries",
            journal1: "Dr Bank RM10,000; Cr Interest Income RM10,000",
            journal2: "Dr Bank Charges Expense RM2,000; Cr Bank RM2,000",
            xp: "XP Earned",
            completed: "CASE 06 COMPLETED",
            locked: "Complete Case 05 before opening Case 06.",
            noLives: "No lives available. Wait for life recovery before making another incorrect attempt.",
            modalTitle: "CONFIDENTIAL BANK EVIDENCE",
            close: "CLOSE",
            hint1: "Transactions already in the Cash Book but not yet reflected by the bank are timing differences.",
            hint2: "Cheque: Bank −8,000. Deposit: Bank +5,000. Interest: Cash Book +10,000. Charges: Cash Book −2,000.",
            finalHint1: "Begin with Bank RM111,000 and Cash Book RM100,000.",
            finalHint2: "Bank: 111,000 + 5,000 − 8,000. Cash Book: 100,000 + 10,000 − 2,000.",
            hintLimit: "Both hints have already been used.",
            noAnswer: "Enter both adjusted balances.",
            record: "RECORD",
            original: "ORIGINAL BALANCE",
            note: "Amounts already recorded in the Cash Book must not be recorded twice."
        },
        ms: {
            title: "THE BANK TRAIL",
            subtitle: "Jejaki wang. Selaraskan rekod.",
            label: "FAIL KES 06 / SIASATAN KEWANGAN",
            exit: "KELUAR KES",
            start: "MULA SIASATAN",
            evidence: "LIHAT BUKTI",
            hint: "GUNA HINT",
            hints: "Hints",
            lives: "Nyawa",
            stage: "Peringkat",
            next: "TRANSAKSI SETERUSNYA",
            verify: "SEMAK JAWAPAN",
            verifyFinal: "SEMAK RECONCILIATION",
            submit: "HANTAR LAPORAN KES",
            back: "KEMBALI KE CASE FILES",
            introTitle: "Perbezaan dalam rekod bank",
            intro1: "Detective Alya Rahman menerima dua rekod kewangan Meridian Corporation. Baki kedua-duanya tidak sama pada 31 Disember 2025.",
            intro2: "Pihak pengurusan mendakwa perbezaan hanya disebabkan masa transaksi. Alya mengesyaki terdapat transaksi yang memerlukan pelarasan.",
            intro3: "Siasat empat transaksi, kemudian kira baki selepas bank reconciliation.",
            bank: "Baki Bank Statement",
            cash: "Baki Cash Book",
            transaction: "TRANSAKSI",
            choose: "Pilih rawatan perakaunan yang betul.",
            chooseFirst: "Pilih jawapan dahulu.",
            correct: "Betul! Transaksi berjaya diklasifikasikan.",
            wrong: "Jawapan salah. Semak bukti dan cuba lagi.",
            revealed: "Jawapan yang betul telah didedahkan.",
            finalTitle: "Cabaran Akhir Bank Reconciliation",
            finalIntro: "Kira baki selepas pelarasan. Masukkan nombor bulat tanpa RM atau koma.",
            adjustedBank: "Bank Statement Selepas Pelarasan (RM)",
            adjustedCash: "Cash Book Selepas Pelarasan (RM)",
            finalCorrect: "Betul! Kedua-dua baki ialah RM108,000.",
            finalWrong: "Baki tidak betul. Semak pengiraan.",
            finalReveal: "Jawapan betul: RM108,000 untuk kedua-dua baki.",
            reportTitle: "LAPORAN KES — THE BANK TRAIL",
            reportIntro: "Siasatan selesai. Semua perbezaan perakaunan telah dikenal pasti.",
            conclusion: "Kesimpulan Siasatan",
            conclusionText: "Bank Statement dan Cash Book kedua-duanya mempunyai baki selepas pelarasan sebanyak RM108,000. Cek belum dikemukakan dan deposit dalam perjalanan ialah perbezaan masa. Faedah bank dan caj perkhidmatan memerlukan pelarasan Cash Book. Perbezaan baki asal sahaja tidak membuktikan penipuan.",
            findings: "Penemuan Transaksi",
            journals: "Catatan Jurnal Diperlukan",
            journal1: "Dr Bank RM10,000; Cr Pendapatan Faedah RM10,000",
            journal2: "Dr Belanja Caj Bank RM2,000; Cr Bank RM2,000",
            xp: "XP Diperoleh",
            completed: "CASE 06 SELESAI",
            locked: "Selesaikan Case 05 dahulu.",
            noLives: "Nyawa habis. Tunggu nyawa pulih sebelum percubaan salah seterusnya.",
            modalTitle: "BUKTI BANK SULIT",
            close: "TUTUP",
            hint1: "Transaksi yang sudah ada dalam Cash Book tetapi belum direkodkan oleh bank ialah perbezaan masa.",
            hint2: "Cek: Bank −8,000. Deposit: Bank +5,000. Faedah: Cash Book +10,000. Caj: Cash Book −2,000.",
            finalHint1: "Mulakan dengan Bank RM111,000 dan Cash Book RM100,000.",
            finalHint2: "Bank: 111,000 + 5,000 − 8,000. Cash Book: 100,000 + 10,000 − 2,000.",
            hintLimit: "Kedua-dua hints telah digunakan.",
            noAnswer: "Masukkan kedua-dua baki.",
            record: "REKOD",
            original: "BAKI ASAL",
            note: "Amaun yang sudah direkodkan dalam Cash Book tidak boleh direkodkan dua kali."
        }
    };

    let state = null;
    let feedback = "";
    let feedbackType = "";

    function profile() {
        return typeof getActiveDetective === "function"
            ? getActiveDetective()
            : null;
    }

    function profileId() {
        const p = profile();
        return String(
            (p && (
                p.id ||
                p.profileId ||
                p.user_id ||
                p.username ||
                p.name
            )) || "default"
        );
    }

    function language() {
        const p = profile();
        let value = "en";

        if (typeof getProfileLanguage === "function") {
            value = getProfileLanguage(p) || "en";
        } else if (p) {
            value = (p.settings && p.settings.language) ||
                p.language || p.lang || "en";
        }

        return ["ms", "bm", "melayu", "malay"].includes(
            String(value).toLowerCase()
        ) ? "ms" : "en";
    }

    function t(key) {
        return TEXT[language()][key] || key;
    }

    function tx(item, key) {
        return item[language()][key];
    }

    function money(value) {
        return "RM" + Number(value).toLocaleString("en-MY");
    }

    function saveKey() {
        return SAVE_PREFIX + profileId();
    }

    function freshState() {
        return {
            stage: "intro",
            index: 0,
            started: false,
            answers: {},
            verified: {},
            hints: 0,
            hintKeys: [],
            hintMessages: [],
            bankInput: "",
            cashInput: "",
            finalVerified: false,
            localMistakes: 0,
            completed: false
        };
    }

    function caseRecord(id) {
        if (typeof thfCaseStatus === "function") {
            return thfCaseStatus(id || CASE_ID);
        }
        return null;
    }

    function loadState() {
        let saved = null;

        try {
            saved = JSON.parse(
                localStorage.getItem(saveKey()) || "null"
            );
        } catch (error) {
            saved = null;
        }

        state = Object.assign(freshState(), saved || {});

        if (!state.answers || typeof state.answers !== "object") {
            state.answers = {};
        }

        if (!state.verified || typeof state.verified !== "object") {
            state.verified = {};
        }

        if (!Array.isArray(state.hintKeys)) {
            state.hintKeys = [];
        }

        if (!Array.isArray(state.hintMessages)) {
            state.hintMessages = [];
        }

        const record = caseRecord();

        if (record) {
            state.hints = Math.max(
                Number(state.hints) || 0,
                Number(record.hints) || 0
            );

            if (record.completed) {
                state.completed = true;
                state.stage = "report";
            }
        }

        if (state.completed) {
            state.stage = "report";
        }
    }

    function saveState() {
        if (!state) return;

        try {
            localStorage.setItem(
                saveKey(),
                JSON.stringify(state)
            );
        } catch (error) {
            console.warn("Case 06 autosave error:", error);
        }
    }

    function progress() {
        return typeof thfLoadProgress === "function"
            ? thfLoadProgress()
            : null;
    }

    function mistakeCount() {
        const record = caseRecord();

        return record
            ? Number(record.mistakes) || 0
            : Number(state.localMistakes) || 0;
    }

    function canMakeMistake() {
        if (mistakeCount() >= 1) return true;

        const p = progress();
        return !p || Number(p.lives) > 0;
    }

    function registerMistake() {
        if (typeof thfRegisterMistake === "function") {
            thfRegisterMistake(CASE_ID);
        } else {
            state.localMistakes = Math.min(
                2,
                state.localMistakes + 1
            );
        }
        saveState();
    }

    function registerHint() {
        if (
            typeof thfLoadProgress !== "function" ||
            typeof thfGetCase !== "function" ||
            typeof thfSaveProgress !== "function"
        ) {
            return;
        }

        const p = thfLoadProgress();
        const record = thfGetCase(p, CASE_ID);

        record.hints = Math.max(
            Number(record.hints) || 0,
            state.hints
        );

        thfSaveProgress(p);
    }

    function completeCase() {
        if (typeof thfCompleteCase === "function") {
            thfCompleteCase(CASE_ID);
        }

        state.completed = true;
        state.stage = "report";
        saveState();

        if (typeof thfRefreshAll === "function") {
            thfRefreshAll();
        }
    }

    function el(tag, className, value) {
        const node = document.createElement(tag);

        if (className) node.className = className;
        if (value !== undefined) node.textContent = value;

        return node;
    }

    function add(parent, ...children) {
        children.forEach(function (child) {
            if (child) parent.appendChild(child);
        });
        return parent;
    }

    function btn(label, action, type) {
        const node = el(
            "button",
            "c06-btn" + (type ? " " + type : ""),
            label
        );

        node.type = "button";
        node.addEventListener("click", action);
        return node;
    }

    function card() {
        return el("section", "c06-card");
    }

    function actions() {
        return el("div", "c06-actions");
    }

    function p(value) {
        return el("p", "", value);
    }

    function h(value, level) {
        return el(level || "h2", "", value);
    }

    function notice(parent, message, kind) {
        parent.appendChild(
            el(
                "div",
                "c06-feedback" + (kind ? " " + kind : ""),
                message
            )
        );
    }

    function build() {
        let screen = document.getElementById("case06-screen");

        if (!screen) {
            screen = el("section", "screen hidden");
            screen.id = "case06-screen";
            screen.hidden = true;

            const app = document.getElementById("app");
            (app || document.body).appendChild(screen);
        }

        let modal = document.getElementById("thf-c06-modal");

        if (!modal) {
            modal = el("div");
            modal.id = "thf-c06-modal";
            modal.hidden = true;
            document.body.appendChild(modal);
        }

        if (
            typeof screenIds !== "undefined" &&
            Array.isArray(screenIds) &&
            !screenIds.includes("case06-screen")
        ) {
            screenIds.push("case06-screen");
        }
    }

    function screenTop() {
        const screen = document.getElementById("case06-screen");

        if (screen) {
            screen.scrollTop = 0;
        }
    }

    function showCase() {
        const screen = document.getElementById("case06-screen");
        if (!screen) return;

        if (typeof showScreen === "function") {
            showScreen("case06-screen");
        }

        document.querySelectorAll("#app > .screen").forEach(
            function (node) {
                if (node.id !== "case06-screen") {
                    node.classList.add("hidden");
                    node.hidden = true;
                }
            }
        );

        screen.classList.remove("hidden");
        screen.hidden = false;

        document.body.classList.add("thf-case06-active");
        screenTop();
    }

    function returnToFiles() {
        closeEvidence();

        const screen = document.getElementById("case06-screen");

        if (screen) {
            screen.hidden = true;
            screen.classList.add("hidden");
        }

        document.body.classList.remove("thf-case06-active");

        if (typeof thfOpenCaseFiles === "function") {
            thfOpenCaseFiles();
            return;
        }

        if (
            typeof showScreen === "function" &&
            document.getElementById("case-files-screen")
        ) {
            showScreen("case-files-screen");
            return;
        }

        alert("Case Files navigation is unavailable.");
    }

    function openCase() {
        build();

        const previous = caseRecord("05");

        if (!previous || !previous.completed) {
            alert(t("locked"));
            return;
        }

        loadState();
        feedback = "";
        feedbackType = "";

        render();
        showCase();
    }

    function render(resetScroll) {
        build();

        const screen = document.getElementById("case06-screen");
        if (!screen || !state) return;

        const oldScroll = screen.scrollTop;
        screen.replaceChildren();

        const container = el("div", "c06-container");
        const top = el("div", "c06-topbar");
        const heading = el("div");

        add(
            heading,
            el("div", "c06-kicker", t("label")),
            el("h1", "c06-title", t("title")),
            el("p", "c06-subtitle", t("subtitle"))
        );

        add(
            top,
            heading,
            btn(t("exit"), returnToFiles, "ghost")
        );

        container.appendChild(top);

        if (state.stage !== "report") {
            const game = progress();
            const status = el("div", "c06-status");

            const stageNumber =
                state.stage === "intro" ? 1 :
                state.stage === "investigate" ? 2 : 3;

            add(
                status,
                el("span", "", t("lives") + ": " +
                    (game ? game.lives : "—")),
                el("span", "", t("hints") + ": " +
                    state.hints + "/2"),
                el("span", "", t("stage") + ": " +
                    stageNumber + "/3")
            );

            container.appendChild(status);

            const bar = el("div", "c06-progress");

            for (let i = 0; i < 3; i++) {
                bar.appendChild(
                    el(
                        "span",
                        i < stageNumber ? "active" : ""
                    )
                );
            }

            container.appendChild(bar);
        }

        if (state.stage === "intro") {
            renderIntro(container);
        } else if (state.stage === "investigate") {
            renderInvestigation(container);
        } else if (state.stage === "final") {
            renderFinal(container);
        } else {
            renderReport(container);
        }

        screen.appendChild(container);

        if (resetScroll === true) {
            screenTop();
        } else {
            screen.scrollTop = oldScroll;
        }
    }

    function tools(parent) {
        const row = actions();

        add(
            row,
            btn(t("evidence"), openEvidence, "secondary"),
            btn(t("hint"), useHint, "ghost")
        );

        parent.appendChild(row);

        state.hintKeys.forEach(function (key) {
            parent.appendChild(
                el("div", "c06-hint", t(key))
            );
        });

        // Compatibility with older saved hints.
        if (state.hintKeys.length === 0) {
            state.hintMessages.forEach(function (message) {
                parent.appendChild(
                    el("div", "c06-hint", message)
                );
            });
        }
    }

    function makeTable(rows, headings) {
        const wrap = el("div", "c06-table-wrap");
        const table = el("table", "c06-table");

        if (headings) {
            const header = el("tr");

            headings.forEach(function (value) {
                header.appendChild(el("th", "", value));
            });

            table.appendChild(header);
        }

        rows.forEach(function (values) {
            const row = el("tr");

            values.forEach(function (value) {
                row.appendChild(el("td", "", value));
            });

            table.appendChild(row);
        });

        wrap.appendChild(table);
        return wrap;
    }

    function renderIntro(container) {
        const section = card();

        add(
            section,
            h(t("introTitle")),
            p(t("intro1")),
            p(t("intro2")),
            p(t("intro3"))
        );

        section.appendChild(
            makeTable(
                [
                    [t("bank"), money(111000)],
                    [t("cash"), money(100000)]
                ],
                [t("record"), t("original")]
            )
        );

        const row = actions();

        row.appendChild(
            btn(t("start"), function () {
                state.stage = "investigate";
                state.started = true;
                saveState();
                render(true);
            })
        );

        section.appendChild(row);
        tools(section);
        container.appendChild(section);
    }

    function renderInvestigation(container) {
        const item = TRANSACTIONS[state.index];

        if (!item) {
            state.stage = "final";
            saveState();
            render(true);
            return;
        }

        const section = card();
        const verified = Boolean(state.verified[item.id]);
        const selected = state.answers[item.id] || "";

        add(
            section,
            el(
                "div",
                "c06-question-count",
                t("transaction") + " " +
                (state.index + 1) + "/4"
            ),
            h(tx(item, "title"))
        );

        const evidence = el("div", "c06-transaction");

        add(
            evidence,
            el("div", "amount", money(item.amount)),
            p(tx(item, "detail"))
        );

        add(section, evidence, h(t("choose"), "h3"));

        const grid = el("div", "c06-options");

        OPTIONS.forEach(function (option) {
            let className = "c06-option";

            if (verified && option.id === item.answer) {
                className += " correct";
            } else if (selected === option.id) {
                className += " selected";
            }

            const optionButton = el(
                "button",
                className,
                option[language()]
            );

            optionButton.type = "button";
            optionButton.disabled = verified;

            optionButton.addEventListener("click", function () {
                if (verified) return;

                state.answers[item.id] = option.id;
                saveState();

                // Preserve current position when selecting.
                render(false);
            });

            grid.appendChild(optionButton);
        });

        section.appendChild(grid);

        if (verified) {
            notice(
                section,
                tx(item, "explanation"),
                "good"
            );
        }

        if (feedback) {
            notice(section, feedback, feedbackType);
        }

        const row = actions();

        row.appendChild(
            verified
                ? btn(t("next"), nextTransaction)
                : btn(t("verify"), verifyTransaction)
        );

        section.appendChild(row);
        tools(section);
        container.appendChild(section);
    }

    function verifyTransaction() {
        const item = TRANSACTIONS[state.index];
        if (!item) return;

        const answer = state.answers[item.id];

        if (!answer) {
            alert(t("chooseFirst"));
            return;
        }

        if (answer === item.answer) {
            state.verified[item.id] = true;
            feedback = t("correct");
            feedbackType = "good";
            saveState();
            render(false);
            return;
        }

        if (!canMakeMistake()) {
            alert(t("noLives"));
            return;
        }

        registerMistake();

        if (mistakeCount() >= 2) {
            state.answers[item.id] = item.answer;
            state.verified[item.id] = true;
            feedback = t("revealed");
            feedbackType = "bad";
        } else {
            state.answers[item.id] = "";
            feedback = t("wrong");
            feedbackType = "bad";
        }

        saveState();
        render(false);
    }

    function nextTransaction() {
        const item = TRANSACTIONS[state.index];

        if (!item || !state.verified[item.id]) return;

        feedback = "";
        feedbackType = "";

        if (state.index < TRANSACTIONS.length - 1) {
            state.index++;
        } else {
            state.stage = "final";
        }

        saveState();

        // New question starts at the top.
        render(true);
    }

    function numberField(label, value, callback) {
        const wrapper = el("label", "c06-field");
        const input = el("input");

        input.type = "number";
        input.inputMode = "numeric";
        input.step = "1";
        input.min = "0";
        input.placeholder = "0";
        input.value = value;

        input.addEventListener("input", function () {
            callback(input.value);
            saveState();
        });

        add(wrapper, el("span", "", label), input);
        return wrapper;
    }

    function renderFinal(container) {
        const section = card();

        add(
            section,
            h(t("finalTitle")),
            p(t("finalIntro"))
        );

        section.appendChild(
            makeTable([
                [t("bank"), money(111000)],
                ["Unpresented Cheque", "− " + money(8000)],
                ["Deposit in Transit", "+ " + money(5000)],
                [t("cash"), money(100000)],
                ["Bank Interest", "+ " + money(10000)],
                ["Bank Charges", "− " + money(2000)]
            ])
        );

        const fields = el("div", "c06-calc-grid");

        add(
            fields,
            numberField(
                t("adjustedBank"),
                state.bankInput,
                function (value) {
                    state.bankInput = value;
                }
            ),
            numberField(
                t("adjustedCash"),
                state.cashInput,
                function (value) {
                    state.cashInput = value;
                }
            )
        );

        section.appendChild(fields);

        if (state.finalVerified) {
            notice(section, t("finalCorrect"), "good");
        }

        if (feedback) {
            notice(section, feedback, feedbackType);
        }

        const row = actions();

        row.appendChild(
            state.finalVerified
                ? btn(t("submit"), submitReport)
                : btn(t("verifyFinal"), verifyFinal)
        );

        section.appendChild(row);
        tools(section);
        container.appendChild(section);
    }

    function verifyFinal() {
        if (
            state.bankInput === "" ||
            state.cashInput === ""
        ) {
            alert(t("noAnswer"));
            return;
        }

        if (
            Number(state.bankInput) === 108000 &&
            Number(state.cashInput) === 108000
        ) {
            state.finalVerified = true;
            feedback = "";
            feedbackType = "";
            saveState();
            render(false);
            return;
        }

        if (!canMakeMistake()) {
            alert(t("noLives"));
            return;
        }

        registerMistake();

        if (mistakeCount() >= 2) {
            state.bankInput = "108000";
            state.cashInput = "108000";
            state.finalVerified = true;
            feedback = t("finalReveal");
        } else {
            feedback = t("finalWrong");
        }

        feedbackType = "bad";
        saveState();
        render(false);
    }

    function useHint() {
        if (state.hints >= 2) {
            alert(t("hintLimit"));
            return;
        }

        state.hints++;

        const key = state.stage === "final"
            ? (state.hints === 1
                ? "finalHint1"
                : "finalHint2")
            : (state.hints === 1
                ? "hint1"
                : "hint2");

        state.hintKeys.push(key);

        // Clear old-format hints only when new hints are used.
        state.hintMessages = [];

        registerHint();
        saveState();
        render(false);
    }

    function submitReport() {
        if (!state.finalVerified) return;

        completeCase();
        feedback = "";
        render(true);
    }

    function renderReport(container) {
        const section = card();

        add(
            section,
            el("div", "c06-kicker", t("completed")),
            h(t("reportTitle")),
            p(t("reportIntro"))
        );

        const result = el("div", "c06-report-result");

        add(
            result,
            h(t("conclusion"), "h3"),
            p(t("conclusionText"))
        );

        section.appendChild(result);
        section.appendChild(h(t("findings"), "h3"));

        const rows = TRANSACTIONS.map(function (item) {
            const option = OPTIONS.find(function (entry) {
                return entry.id === item.answer;
            });

            return [
                tx(item, "title"),
                option ? option[language()] : ""
            ];
        });

        section.appendChild(makeTable(rows));

        add(
            section,
            h(t("journals"), "h3"),
            p(t("journal1")),
            p(t("journal2"))
        );

        const record = caseRecord();

        if (record) {
            notice(
                section,
                t("xp") + ": +" + (record.xp || 0),
                "good"
            );
        }

        const row = actions();
        row.appendChild(btn(t("back"), returnToFiles));

        section.appendChild(row);
        container.appendChild(section);
    }

    function evidenceSection(title, rows) {
        const section = card();

        section.appendChild(h(title, "h3"));
        section.appendChild(makeTable(rows));

        return section;
    }

    function openEvidence() {
        build();

        const modal = document.getElementById("thf-c06-modal");
        modal.replaceChildren();

        const box = el("div", "c06-modal-box");
        const top = el("div", "c06-modal-top");

        add(
            top,
            h(t("modalTitle")),
            btn(t("close"), closeEvidence, "ghost")
        );

        add(
            box,
            top,
            p("MERIDIAN CORPORATION — 31 DECEMBER 2025"),
            evidenceSection("BANK STATEMENT", [
                ["Closing balance", money(111000)],
                ["Unpresented cheque", "Not yet cleared"],
                ["Deposit in transit", "Not yet credited"],
                ["Interest received", "+ " + money(10000)],
                ["Service charges", "− " + money(2000)]
            ]),
            evidenceSection("CASH BOOK", [
                ["Closing balance", money(100000)],
                ["Cheque issued", "Already recorded"],
                ["Deposit received", "Already recorded"],
                ["Bank interest", "Not recorded"],
                ["Bank charges", "Not recorded"]
            ]),
            p(t("note"))
        );

        modal.appendChild(box);
        modal.hidden = false;

        modal.onclick = function (event) {
            if (event.target === modal) {
                closeEvidence();
            }
        };
    }

    function closeEvidence() {
        const modal = document.getElementById("thf-c06-modal");

        if (modal) {
            modal.hidden = true;
        }
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeEvidence();
        }
    });

    window.thfCase06Open = openCase;
    window.thfOpenCase06 = openCase;
    window.thfCase06ReturnToFiles = returnToFiles;

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            build,
            { once: true }
        );
    } else {
        build();
    }

})();
