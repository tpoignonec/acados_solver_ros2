Search.setIndex({"docnames": ["developer_guide/API", "developer_guide/solver_plugins_python_API", "example_application/controller", "example_application/demo", "example_application/ocp_model", "index", "quickstart/installation", "quickstart/usage"], "filenames": ["developer_guide/API.rst", "developer_guide/solver_plugins_python_API.rst", "example_application/controller.rst", "example_application/demo.rst", "example_application/ocp_model.rst", "index.rst", "quickstart/installation.rst", "quickstart/usage.rst"], "titles": ["Full API reference", "Acados Solver Plugins", "ROS2 controller", "Illustrative results", "Robot modeling and OCP formulation", "Acados solver ROS2 Stack", "Getting started", "Usage"], "terms": {"see": [0, 2, 3, 4, 6, 7], "doxygen": 0, "class": [1, 2, 5, 7], "acados_solver_plugin": [1, 2, 5, 7], "solver_plugin_gener": [1, 2, 7], "solverplugingener": [1, 2, 7], "custom_export_path": [1, 2], "str": [1, 2], "none": [1, 2], "library_nam": [1, 2], "sourc": [1, 2, 3, 6], "minimalist": [1, 2, 5], "templat": [1, 2, 5], "base": [1, 2, 6], "code": [1, 2, 4, 5, 7], "gener": [1, 2, 5, 6, 7], "modul": [1, 2], "acadossolv": [1, 2, 7], "deriv": [1, 2, 4], "object": [1, 2, 7], "relev": [1, 2], "extern": [1, 2, 4], "api": [1, 2, 5], "document": [1, 2, 4, 6, 7], "jinja2": [1, 2], "acados_templ": [1, 2, 3, 4, 7], "_generate_file_from_templ": [1, 2], "template_filenam": [1, 2], "export_filenam": [1, 2], "template_render_arg": [1, 2], "generate_solver_plugin": [1, 2, 7], "acados_ocp": [1, 2], "acadosocp": [1, 2, 4, 7], "plugin_class_nam": [1, 2, 7], "solver_descript": [1, 2, 7], "x_index_map": [1, 2, 7], "dict": [1, 2], "z_index_map": [1, 2, 7], "p_index_map": [1, 2, 7], "u_index_map": [1, 2, 7], "acadosocpsolv": [1, 2, 4], "from": [1, 2, 3, 4, 5, 6, 7], "python": [1, 2, 3, 4, 6], "ocp": [1, 5], "model": [1, 2, 5], "paramet": [1, 2, 7], "name": [1, 2, 4, 7], "type": [1, 2], "option": [1, 2, 4, 7], "short": [1, 2], "descript": [1, 2, 7], "export": [1, 6, 7], "default": [1, 2, 4], "differenti": [1, 2, 4], "state": [1, 2, 3, 4, 7], "index": [1, 2], "map": [1, 2, 7], "algebra": [1, 2, 4], "return": [1, 2], "product": [1, 2], "jinga_env_load": [1, 2], "jinja": [1, 2], "environ": [1, 2, 6], "loader": [1, 2, 7], "initi": [1, 2, 4, 7], "packageload": [1, 2], "look": [1, 2], "instal": [1, 2], "folder": [1, 2], "solver_plugin_load": 1, "solverpluginload": 1, "custom_import_path": 1, "load_solver_plugin": 1, "solver_plugin_nam": 1, "todo": 1, "util": 1, "uppercase_to_underscor": 1, "string": [1, 2], "reformat": 1, "camel": 1, "case": 1, "snake": 1, "The": [1, 2, 3, 4, 5, 7], "reform": 1, "testclass": 1, "test_class": 1, "In": [2, 4], "previou": [2, 3], "section": [2, 3], "we": [2, 4, 7], "acado": [2, 6], "defin": [2, 7], "an": [2, 3, 4, 7], "optim": [2, 4, 5], "problem": [2, 4, 6], "thi": [2, 3, 4, 6, 7], "show": [2, 3], "how": [2, 7], "To": [2, 5, 7], "first": [2, 3, 4, 6], "need": 2, "pluginlib": [2, 7], "provid": [2, 3, 5, 7], "method": [2, 7], "take": [2, 7], "semant": [2, 7], "argument": 2, "variabl": [2, 4, 7], "indic": [2, 7], "vector": [2, 4, 7], "For": 2, "rrbot": [2, 4], "exampl": [2, 4, 7], "script": [2, 3, 4, 6], "i": [2, 3, 4, 5, 7], "follow": [2, 4], "acadosmodel": [2, 4, 7], "q": [2, 4], "0": [2, 3, 4, 7], "q_dot": [2, 4], "n": [2, 3, 4, 7], "b": [2, 3, 4, 7], "actual": [2, 4, 7], "empti": [2, 7], "demo": [2, 4, 5, 7], "l0": [2, 4], "l1": [2, 4], "l2": [2, 4], "m1": [2, 4], "m2": [2, 4], "4": 2, "p_ref": [2, 4], "5": 2, "6": 2, "p_dot_ref": [2, 4], "7": 2, "8": 2, "q_pos_diag": [2, 4], "9": 2, "10": [2, 4], "q_vel_diag": [2, 4], "11": 2, "12": 2, "r_diag": [2, 4], "13": 2, "14": 2, "tau": [2, 4], "import": [2, 3, 4, 6, 7], "rrbotcartesiantrack": 2, "track": [2, 4], "cartesian": [2, 4], "trajectori": [2, 4], "planar": [2, 4], "robot": [2, 3, 5, 6], "noqa": 2, "e501": 2, "full": [2, 4, 5], "can": [2, 3, 4, 7], "found": [2, 4], "export_acados_solver_plugin": [2, 3, 4], "py": [2, 3, 4], "file": [2, 4], "example_acados_control": [2, 3, 4], "directori": [2, 4], "acados_solver_ros2_exampl": [2, 3, 4], "repositori": [2, 3, 4, 5], "simpli": [2, 3, 4, 7], "run": [2, 6], "bash": [2, 3, 6], "python3": [2, 3, 6], "relative_path_to_script": 2, "which": [2, 4], "result": [2, 5], "workspac": [2, 6], "tree": 2, "As": [2, 3, 4], "shown": [2, 3], "figur": [2, 4], "ar": [2, 3, 4, 7], "src": [2, 3, 6], "wrapper": [2, 5], "inherit": 2, "xml": 2, "config": 2, "e": [2, 3, 4, 5, 7], "export_plugin": 2, "librari": [2, 5], "path": [2, 3, 6], "base_class_typ": 2, "order": [2, 4], "rebuild": 2, "colcon": [2, 3, 6], "build": [2, 6], "cmake": [2, 3], "arg": [2, 3], "dcmake_build_typ": [2, 3], "releas": [2, 3], "symlink": [2, 3], "add": 2, "acados_solver_bas": [2, 5, 7], "build_depend": 2, "exec_depend": 2, "cmakelist": 2, "txt": 2, "find_packag": 2, "requir": [2, 6], "ament_target_depend": 2, "public": 2, "hpp": [2, 7], "includ": [2, 4, 5, 7], "class_load": [2, 7], "namespac": 2, "exampleacadoscontrol": 2, "controller_interfac": 2, "controllerinterfac": 2, "callbackreturn": 2, "on_init": 2, "overrid": 2, "interfaceconfigur": 2, "command_interface_configur": 2, "const": 2, "state_interface_configur": 2, "on_configur": 2, "rclcpp_lifecycl": 2, "previous_st": 2, "return_typ": 2, "updat": [2, 3, 7], "rclcpp": 2, "time": [2, 3, 4, 6, 7], "durat": [2, 4], "period": [2, 4, 7], "protect": 2, "std": [2, 7], "shared_ptr": [2, 7], "classload": [2, 7], "acados_solver_loader_": [2, 7], "unique_ptr": [2, 7], "acados_solver_": [2, 7], "addition": 2, "should": [2, 4, 6], "reset": 2, "on_activ": 2, "here": [2, 4], "set": [2, 3, 4, 7], "g": [2, 4, 7], "number": 2, "shoot": 2, "node": [2, 3], "sampl": [2, 4, 7], "chang": [2, 3, 7], "runtim": [2, 7], "cpp": 2, "get": [2, 5, 7], "nmpc_plugin_nam": [2, 7], "int": 2, "predict": [2, 4, 7], "horizon": [2, 4, 7], "doubl": [2, 7], "t": [2, 4], "002": 2, "500": 2, "hz": 2, "make_shar": [2, 7], "createunmanagedinst": [2, 7], "init": [2, 7], "rclcpp_error": 2, "get_nod": 2, "get_logg": 2, "fail": 2, "failur": 2, "current": [2, 6], "joint": [2, 3, 4], "q_po": [2, 4], "q_vel": [2, 4], "valuemap": 2, "x_values_map": 2, "set_initial_state_valu": [2, 7], "nmpc": [2, 3, 4, 5, 6], "valu": [2, 4, 7], "error": [2, 4], "refer": [2, 4, 5, 7], "p_values_map": 2, "set_runtime_paramet": [2, 7], "bool": 2, "all_ok": 2, "true": [2, 3], "tau_cmd": 2, "sqp": 2, "fals": 2, "els": 2, "input": [2, 3, 7], "u_values_map": 2, "get_control_values_as_map": 2, "send": 2, "command": 2, "If": 2, "construct": 2, "casadi": [2, 7], "By": 2, "plugin_sources_dir": 2, "user": [2, 3], "prompt": 2, "some": [2, 4, 7], "avoid": 2, "echo": [2, 3], "y": [2, 3, 6], "simpl": [2, 5], "around": 2, "store": 2, "It": [2, 3, 4], "conveni": 2, "wai": 2, "pass": 2, "mandatori": 2, "directli": 2, "might": 2, "more": [2, 4, 7], "effici": 2, "setter": 2, "especi": [2, 7], "present": 3, "icub": [3, 6], "interact": 3, "rviz": 3, "marker": 3, "us": [3, 5, 6], "desir": [3, 4], "p": [3, 4], "d": [3, 4], "end": [3, 4], "effector": [3, 4], "drag": 3, "red": 3, "fig": 3, "A": [3, 5, 7], "server": 3, "publish": 3, "veloc": [3, 4], "dot": [3, 4], "control": [3, 4, 5], "comput": [3, 4], "implement": [3, 4], "describ": [3, 4], "visual": 3, "rviz2": 3, "opt": [3, 6], "ro": [3, 6], "humbl": [3, 6], "setup": [3, 6], "mkdir": 3, "ros2_w": [3, 6], "cd": [3, 6], "git": [3, 6], "clone": [3, 6], "http": [3, 6], "github": [3, 5, 6], "com": [3, 6], "vc": [3, 6], "repo": [3, 6], "rosdep": [3, 6], "ignor": [3, 6], "r": [3, 4, 6], "second": [3, 4], "example_acados_bringup": 3, "launch_demo": 3, "launch_plotjuggl": 3, "plot": 3, "row": 3, "bottom": 3, "raw": 3, "torqu": [3, 4], "displai": 3, "blue": 3, "line": 3, "visibl": 3, "successfulli": 3, "respect": [3, 4], "while": 3, "plotjuggl": 3, "let": 4, "u": 4, "consid": 4, "link": 4, "unit": 4, "length": 4, "mass": 4, "repres": 4, "below": 4, "contain": 4, "xz": 4, "plane": 4, "subject": 4, "graviti": 4, "goal": [4, 5], "compos": 4, "posit": 4, "system": [4, 6, 7], "ddot": 4, "c": [4, 5], "where": 4, "q_1": 4, "q_2": 4, "angl": 4, "tau_1": 4, "tau_2": 4, "appli": 4, "mathbb": 4, "inertia": 4, "matrix": 4, "corioli": 4, "write": 4, "form": 4, "equat": 4, "x": 4, "begin": 4, "bmatrix": 4, "f": 4, "cost": [4, 7], "function": [4, 7], "mathcal": 4, "l": 4, "t_k": 4, "minim": 4, "discret": 4, "int_": 4, "t_f": 4, "left": 4, "2_": 4, "q_p": 4, "q_v": 4, "2_r": 4, "right": 4, "dt": 4, "weight": 4, "matric": 4, "definit": 4, "tune": 4, "close": 4, "loop": [4, 7], "behavior": 4, "constraint": [4, 7], "x_k": 4, "given": [4, 7], "bound": [4, 7], "q_": 4, "min": 4, "leq": 4, "max": 4, "pi": 4, "cfrac": 4, "_": 4, "tau_": 4, "25": 4, "20": 4, "transcrib": 4, "nonlinear": 4, "program": [4, 6], "nlp": 4, "solv": [4, 6, 7], "solver": [4, 6, 7], "high": 4, "perform": 4, "step": [4, 6, 7], "geometri": 4, "properti": 4, "ca": 4, "sym_q": 4, "sx": 4, "sym": 4, "sym_q_dot": 4, "sym_tau": 4, "sym_l0": 4, "along": 4, "z": 4, "axi": 4, "m": [4, 6], "sym_l1": 4, "sym_l2": 4, "sym_m1": 4, "kg": 4, "sym_m2": 4, "detail": [4, 7], "creat": [4, 7], "vertcat": 4, "sym_xdot": 4, "x_dot": 4, "shape": 4, "xdot": 4, "zero": 4, "expr_q_dot2": 4, "inv": 4, "explicit": [4, 7], "od": [4, 7], "f_expl_expr": 4, "self": 4, "acc": 4, "implicit": 4, "dae": [4, 7], "f_impl_expr": 4, "forward": 4, "kinemat": 4, "sym_p": 4, "sin": 4, "co": 4, "sym_p_dot": 4, "jacobian": 4, "rrbot_model": 4, "third": 4, "specifi": [4, 7], "linear": [4, 5], "could": 4, "easili": 4, "instead": 4, "numpi": 4, "np": 4, "num": 4, "dim": 4, "declar": 4, "extra": 4, "sym_p_ref": 4, "sym_p_dot_ref": 4, "sym_q_pos_diag": 4, "sym_q_vel_diag": 4, "sym_r_diag": 4, "append": 4, "origin": 4, "parameter_valu": 4, "non": [4, 5], "diag": 4, "err_p": 4, "err_p_dot": 4, "cost_typ": 4, "cost_type_": 4, "cost_expr_ext_cost": 4, "q_err_p": 4, "q_err_p_dot": 4, "termin": 4, "chosen": 4, "carefulli": 4, "practic": 4, "veri": 4, "rigor": 4, "enough": 4, "purpos": [4, 7], "cost_expr_ext_cost_": 4, "placehold": 4, "x0": 4, "limit": 4, "idxbu": 4, "arrai": 4, "lbu": 4, "ubu": 4, "q_dot_max": 4, "idxbx": 4, "rang": 4, "lbx": 4, "ubx": 4, "replic": 4, "stage": [4, 7], "lbx_e": 4, "ubx_": 4, "idxbx_": 4, "solver_opt": 4, "tf": 4, "nlp_solver_typ": 4, "sqp_rti": 4, "integrator_typ": 4, "irk": [4, 7], "other": 4, "all": 4, "done": 4, "point": [4, 6], "fulli": 4, "applic": 4, "implepmenet": 4, "nonlinear_l": 4, "better": 4, "addit": 4, "featur": 4, "lqr": 4, "like": 4, "ad": 4, "slack": 4, "itself": 4, "so": 4, "jerk": 4, "helper": [5, 7], "packag": [5, 7], "prototyp": [5, 7], "seamlessli": 5, "them": 5, "date": 5, "interfac": [5, 7], "between": [5, 7], "auto": [5, 7], "plugin": [5, 6], "acados_solver_plugins_exampl": [5, 6], "when": [5, 7], "start": [5, 7], "project": 5, "acados_solver_ros2": [5, 6], "usag": 5, "formul": 5, "illustr": [5, 7], "ubuntu": 6, "22": 6, "04": 6, "lt": 6, "1": 6, "ros2": 6, "distribut": 6, "dev": 6, "offici": 6, "prepar": 6, "depend": 6, "sudo": 6, "apt": 6, "common": 6, "extens": 6, "pip": 6, "futur": 6, "fstring": 6, "retro": 6, "compat": 6, "stack": 6, "At": 6, "you": [6, 7], "abl": 6, "mockacadossolv": 6, "demo_export_plugin_to_custom_pkg": 6, "note": 6, "ask": 6, "tera": 6, "render": 6, "press": 6, "accept": 6, "Then": [6, 7], "newli": 6, "pendulum": 6, "test_mock_plugin": 6, "overview": 7, "symbol": 7, "etc": 7, "necessari": 7, "dynam": 7, "instanti": 7, "next": 7, "choic": 7, "qp": 7, "hpipm": 7, "qpoas": 7, "integr": 7, "erk": 7, "onc": 7, "latter": 7, "correspond": 7, "onli": 7, "a_state_vari": 7, "a_set_of_state_vari": 7, "another_state_vari": 7, "a_paramet": 7, "another_paramet": 7, "a_set_of_paramet": 7, "some_control_vari": 7, "name_of_the_plugin_class": 7, "description_of_the_solv": 7, "load": 7, "instanc": 7, "configur": 7, "your": 7, "ret": 7, "prediction_horizon": 7, "sampling_period_in_second": 7, "each": 7, "iter": 7, "basic": 7, "wrap": 7, "set_control_bound": 7, "upper": 7, "lower": 7, "set_state_bound": 7, "get_control_valu": 7, "solut": 7, "get_state_valu": 7, "access": 7, "also": 7, "higher": 7, "level": 7, "final": 7, "advanc": 7, "retriev": 7, "get_nlp_out": 7, "get_nlp_in": 7, "get_nlp_opt": 7}, "objects": {"acados_solver_plugins.solver_plugin_generator": [[1, 0, 1, "", "SolverPluginGenerator"]], "acados_solver_plugins.solver_plugin_generator.SolverPluginGenerator": [[1, 1, 1, "", "_generate_file_from_template"], [1, 1, 1, "", "generate_solver_plugin"], [1, 2, 1, "", "jinga_env_loader"]], "acados_solver_plugins.solver_plugin_loader": [[1, 0, 1, "", "SolverPluginLoader"]], "acados_solver_plugins.solver_plugin_loader.SolverPluginLoader": [[1, 1, 1, "", "load_solver_plugin"]], "acados_solver_plugins.utils": [[1, 3, 1, "", "uppercase_to_underscore"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:attribute", "3": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "attribute", "Python attribute"], "3": ["py", "function", "Python function"]}, "titleterms": {"full": 0, "api": 0, "refer": 0, "acado": [1, 3, 4, 5, 7], "solver": [1, 2, 3, 5], "plugin": [1, 2, 3, 7], "gnerer": [1, 7], "new": 1, "load": [1, 2], "previous": 1, "built": 1, "implement": 1, "yet": 1, "miscellan": 1, "function": 1, "ros2": [2, 3, 5], "control": [2, 7], "export": [2, 3], "us": [2, 4, 7], "c": [2, 7], "1": [2, 3, 4, 7], "setup": 2, "packag": [2, 3], "depend": [2, 3], "2": [2, 3, 4, 7], "3": [2, 3, 4, 7], "configur": 2, "solv": 2, "ocp": [2, 4, 7], "note": [2, 4], "recommend": 2, "illustr": 3, "result": 3, "instal": [3, 6], "exampl": [3, 5, 6], "launch": 3, "build": [3, 7], "4": [3, 7], "demo": 3, "constraint": 3, "satisfact": 3, "cartesian": 3, "posit": 3, "track": 3, "robot": 4, "model": [4, 7], "formul": [4, 7], "dynam": 4, "transcript": 4, "casadi": 4, "defin": 4, "symbol": 4, "paramet": 4, "stack": 5, "quickstart": 5, "applic": [5, 7], "python": 5, "modul": 5, "extra": 5, "document": 5, "get": 6, "start": 6, "test": 6, "code": 6, "usag": 7, "optim": 7, "problem": 7}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 60}, "alltitles": {"Full API reference": [[0, "full-api-reference"]], "Acados Solver Plugins": [[1, "acados-solver-plugins"]], "Gnererate new acados solver plugins": [[1, "gnererate-new-acados-solver-plugins"]], "Load previously built acados solver plugins (not implemented yet)": [[1, "load-previously-built-acados-solver-plugins-not-implemented-yet"]], "Miscellaneous functions": [[1, "miscellaneous-functions"]], "ROS2 controller": [[2, "ros2-controller"]], "Export the solver plugin": [[2, "export-the-solver-plugin"]], "Use the plugin in a C++ controller": [[2, "use-the-plugin-in-a-c-controller"]], "1) Setup the ROS2 controller package dependencies": [[2, "setup-the-ros2-controller-package-dependencies"]], "2) Load the solver plugin in the ROS2 controller": [[2, "load-the-solver-plugin-in-the-ros2-controller"]], "3) Configure the solver plugin in the ROS2 controller": [[2, "configure-the-solver-plugin-in-the-ros2-controller"]], "3) Solve the OCP": [[2, "solve-the-ocp"]], "Notes and recommendations": [[2, "notes-and-recommendations"]], "Illustrative results": [[3, "illustrative-results"]], "Installation of the example package and launch": [[3, "installation-of-the-example-package-and-launch"]], "1) Install dependencies": [[3, "install-dependencies"]], "2) Build and install ros2 packages": [[3, "build-and-install-ros2-packages"]], "3) Export and build the Acados solver plugins": [[3, "export-and-build-the-acados-solver-plugins"]], "4) Launch demo": [[3, "launch-demo"]], "Constraints satisfaction": [[3, "constraints-satisfaction"]], "Cartesian position tracking": [[3, "cartesian-position-tracking"]], "Robot modeling and OCP formulation": [[4, "robot-modeling-and-ocp-formulation"]], "Robot dynamic modeling": [[4, "robot-dynamic-modeling"]], "OCP formulation": [[4, "ocp-formulation"]], "Transcription using CasADI and Acados": [[4, "transcription-using-casadi-and-acados"]], "1) Define the CasADi symbols and parameters": [[4, "define-the-casadi-symbols-and-parameters"]], "2) Define the Acados model": [[4, "define-the-acados-model"]], "3) Define the Acados OCP": [[4, "define-the-acados-ocp"]], "Notes": [[4, "notes"]], "Acados solver ROS2 Stack": [[5, "acados-solver-ros2-stack"]], "Quickstart": [[5, null]], "Example application": [[5, null]], "Python modules": [[5, null]], "Extra documentation": [[5, null]], "Getting started": [[6, "getting-started"]], "Installation": [[6, "installation"]], "Example test code": [[6, "example-test-code"]], "Usage": [[7, "usage"]], "1) Build Acados model": [[7, "build-acados-model"]], "2) Formulate the optimal control problem (OCP)": [[7, "formulate-the-optimal-control-problem-ocp"]], "3) Gnererate the C++ plugin": [[7, "gnererate-the-c-plugin"]], "4) Use the plugin in a C++ application": [[7, "use-the-plugin-in-a-c-application"]]}, "indexentries": {"solverplugingenerator (class in acados_solver_plugins.solver_plugin_generator)": [[1, "acados_solver_plugins.solver_plugin_generator.SolverPluginGenerator"]], "solverpluginloader (class in acados_solver_plugins.solver_plugin_loader)": [[1, "acados_solver_plugins.solver_plugin_loader.SolverPluginLoader"]], "_generate_file_from_template() (acados_solver_plugins.solver_plugin_generator.solverplugingenerator method)": [[1, "acados_solver_plugins.solver_plugin_generator.SolverPluginGenerator._generate_file_from_template"]], "generate_solver_plugin() (acados_solver_plugins.solver_plugin_generator.solverplugingenerator method)": [[1, "acados_solver_plugins.solver_plugin_generator.SolverPluginGenerator.generate_solver_plugin"]], "jinga_env_loader (acados_solver_plugins.solver_plugin_generator.solverplugingenerator attribute)": [[1, "acados_solver_plugins.solver_plugin_generator.SolverPluginGenerator.jinga_env_loader"]], "load_solver_plugin() (acados_solver_plugins.solver_plugin_loader.solverpluginloader method)": [[1, "acados_solver_plugins.solver_plugin_loader.SolverPluginLoader.load_solver_plugin"]], "uppercase_to_underscore() (in module acados_solver_plugins.utils)": [[1, "acados_solver_plugins.utils.uppercase_to_underscore"]]}})