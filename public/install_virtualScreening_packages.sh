#!/bin/bash

# Instal paket-paket menggunakan conda
conda install -c conda-forge -c schrodinger pymol-bundle
conda install -c conda-forge openbabel
conda install -c conda-forge pdbfixer

# Instal paket-paket menggunakan pip
pip install rdkit MDAnalysis chembl_webresource_client numpy pandas matplotlib tqdm py3Dmol

echo "Instalasi selesai!"