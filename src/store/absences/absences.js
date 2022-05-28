import axios from "axios";
import { getField, updateField } from "vuex-map-fields";
import endPoints from "../../config/endPoints";
import { defaultErrorNotification } from "../../constants";


const defaultFilter = {
  id: "",
  id_collaborator: "",
  description: "",
  start_date: "",
  finish_date: "",
  type_abstence: "",
  
}

const defaultAbsenceItem = {
  id: null,
  id_collaborator: "",
  description: "",
  start_date: "",
  finish_date: "",
  type_abstence: "",
  date_picker: "",
  attest_file: "",
  attest: ""
};

export default {
  namespaced: true,
  state: {
    absenceToDelete: {},
    attest_show: "",
    items: [],
    selectedItem: {},
    dialogDelete: false,
    dialogAttest:false,
    mode: "",
    loading: false,
    errors: [],
    totalItems: 10,
    dialog: false,
    deleteDialog: false,
    filterDialog: false,
    overlay: false,
    filter: {
      id: "",
      id_collaborator: "",
      description: "",
      start_date: "",
      finish_date: "",
      type_abstence: ""
    },
    notification: {
      show: false,
      message: "",
      type: "",
    },
    pagination: {
      page: 1,
      itemsPerPage: 10,
    },
    possible_types: [
      { id: 0, description: "Falta" },
      { id: 1, description: "Atestado" }
    ]
  },
  mutations: {
    addAbsence: (state) => {
      state.dialog = true;
      state.mode = "ADD";
      defaultAbsenceItem.date_picker = new Date();
      state.selectedItem = Object.assign({}, defaultAbsenceItem);
    },
    closeDialog: (state) => {
      state.selectedItem = {};
      state.editedIndex = -1;
      state.errors = [];
      state.dialog = false;
      state.mode = "LIST";
    },
    editAbsence: (state, payload) => {
      payload.item.date_picker = new Date(payload.item.start_date);
      payload.item.finish_date = new Date(payload.item.finish_date);
      state.selectedItem = Object.assign({}, payload.item);
      // state.editedIndex = state.items.indexOf(payload.item);
      state.dialog = true;
      state.mode = "EDIT";
    },
    view: (state, payload) => {
      state.selectedItem = payload;
      state.selectedItem.date_picker = new Date(payload.start_date);
      state.selectedItem.finish_date = new Date(payload.finish_date);
      // state.editedIndex = state.items.indexOf(payload);
      state.dialog = true;
      state.mode = "VIEW";
    },
    clearFilter: (state) => {
      state.filter = Object.assign({}, defaultFilter)
    },
    setItems: (state, payload) => {
      state.items = payload
    },
    setAbsenceToDelete: (state, absence) => state.absenceToDelete = absence,
    setTotalItems: (state, payload) => (state.totalItems = payload),
    setLoading: (state, payload) => (state.loading = payload),
    showNotification: (state, payload) => (state.notification = payload),
    setDialogDelete: (state, show) => state.dialogDelete = show,
    setDialogAttest: (state, payload) => (state.dialogAttest = payload.show),
    setShowDialog: (state, payload) => {
      state.dialog = payload;
      state.selectedItem = Object.assign({}, defaultAbsenceItem);
    },
    setPage: (state, payload) => {
      state.pagination.page = payload.page;
      state.pagination.itemsPerPage = payload.itemsPerPage;
    },
    showOverlay: (state, payload) => {
      state.overlay = payload.show;
    },
    setShowFilter: (state, payload) => (state.filterDialog = payload),
    setAttest: (state, payload) => (state.attest_show = payload.attest),
    updateField,
  },
  actions: {
    closeDialog: ({ commit }) => {
      commit("closeDialog", false);
    },
    closeDeleteDialog: ({ commit }) => {
      commit('setDialogDelete', false)
      commit('setAbsenceToDelete', {})
  },
  showDeleteDialog: ({ commit }, item) => {
    commit('setDialogDelete', true)
    commit('setAbsenceToDelete', item)
},
    deleteAbsence: ({ dispatch, commit, state }) => {
      commit('setLoading', true)
      commit('setAttest', state.absenceToDelete)
      
      axios.delete(endPoints.absences + "/" + state.absenceToDelete.id, state.absenceToDelete).then(() => {
          dispatch('closeDeleteDialog')
          let notification = {
              show: true,
              message: "Falta excluída com sucesso.",
              type: "success"
          }
          commit('showNotification', notification)
          return dispatch('getItems', { resetPage: false });
      });
  },
    getItems: async ({ commit, state }, payload) => {
      let filter = state.filter
      let url = endPoints.absences;
      if (payload.resetPage) {
        url += "?page=" + 1 + "&" + "itemsPerPage=" + 10;
        commit("setPage", { page: 1, itemsPerPage: 10 });
      } else {
        url +=
          "?page=" +
          state.pagination.page +
          "&" +
          "itemsPerPage=" +
          state.pagination.itemsPerPage;
      }

      Object.keys(filter).forEach(function (field) {
        if (filter[field] !== "" && filter[field] !== undefined && filter[field] !== null) {
          url += "&" + field + "=" + filter[field]
        }
      })

      if (state.pagination && state.pagination.sortBy && state.pagination.sortBy.length > 0) {
        url += "&sort_by=" + (state.pagination.sortBy[0] === 'score' ? "id" : state.pagination.sortBy[0])
        url += "&sort_desc=" + state.pagination.sortDesc[0]
      }

      commit("setLoading", true);

      try {
        let items = await axios.get(url);
        
        commit("setItems", items.data.data)
        commit("setTotalItems", items.data.total);
      } catch (error) {
        commit(
          "showNotification",
          defaultErrorNotification(error?.response?.data?.message)
        );


      }
      commit("setLoading", false);
    },
    save: async ({ dispatch, commit, state }) => {
      var url = endPoints.absences;
      let func = "";
      let data = state.selectedItem;
      state.selectedItem.id_collaborator = parseFloat(state.selectedItem.id_collaborator);
      commit("showOverlay", { show: true });
      if (state.mode == "ADD") {
        func = axios.post;
        url = endPoints.absences;
        
        if (data.attest_file != "") {
          
          var file = data.attest_file;
          
          const toBase64 = (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
          });
          
          let base64_file = await toBase64(file);
          data.attest = base64_file;
        }
      } else {
        func = axios.put;
        url += "/" + data.id;
      }

      func(url, data).then(
        () => {
          dispatch("getItems", { resetPage: true });
          let notification = {
            show: true,
            message: "Falta salva com sucesso",
            type: "success",
          };
          commit("showNotification", notification);
          commit("closeDialog");
          commit("showOverlay", { show: false });
        },
        (error) => {
          let notification = {
            show: true,
            message: error.response.data.message,
            type: "error",
          };
          commit("showNotification", notification);
          commit("showOverlay", { show: false });
        }
      );
    },
    showAttest: ({ commit }, payload) => {
      let url = endPoints.attest;

      url += "/" + payload.item.id + "?type=0";
      commit("showOverlay", { show: true });
      axios
        .get(url)
        .then((r) => {
          let file = r.data.file;
          let mimetype = file.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0];
          if (mimetype.indexOf("pdf") != -1) {
            let name = "Atestado-" + payload.item.id + ".pdf";
            var a = document.createElement("a"); //Create <a>
            a.href = file; //Image Base64 Goes here
            a.download = name; //File name Here
            a.click();
          }else if (mimetype.indexOf("png") != -1 || mimetype.indexOf("jpeg") != -1 || mimetype.indexOf("jpg") != -1) {
            let name = "Atestado-" + payload.item.id + ".png";
            var b = document.createElement("a"); //Create <a>
            b.href = file; //Image Base64 Goes here
            b.download = name; //File name Here
            b.click();
          }  
          else {
            commit("setAttest", { attest: r.data.file });
            commit("setDialogAttest", { show: true });
          }
          commit("showOverlay", { show: false });
        })
        .catch(() => {
          let notification = {
            show: true,
            message: "Atestado não encontrado",
            type: "error",
          };
          commit("showNotification", notification);
          commit("showOverlay", { show: false });
        });
    }
  },
  getters: {
    getField,
  },
};
